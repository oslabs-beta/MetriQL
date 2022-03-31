import React, { useContext, useEffect } from 'react';
import * as d3 from 'd3';

import { URLContext } from '../context/global-context';

export default function SchemaVisual({ visuals }) {
	// const { urlState  } = useContext(URLContext);

	const treeData = visuals.visuals;
	console.log("should be json", visuals.visuals)
	function visualTree() {

		let margin = { top: 0, right: 90, bottom: 40, left: 70 },
			width = 1200 - margin.left - margin.right,
			height = 725 - margin.top - margin.bottom;

		let i = 0,
			duration = 750;
		// grabbing from DOM
		const svg = d3
			.select('#visualDisplay')
			.attr("width", width + margin.right + margin.left)
			.attr("height", height + margin.top + margin.bottom)
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")")


		const g = svg.append('g')

		//defining where the actual area of the tree is
		const treemap = d3
			.tree()
			.size([height, width])


		// defining the parent root & it's coordinates
		const root = d3.hierarchy(treeData, (d) => d.children);
		root.x0 = svg.style.height / 2; // ! trying to find the middle of the svg graph to root the tree
		root.y0 = 0;
		root.children.forEach(collapse);

		// assigning each node properties and an id
		root.each(function (d) {
			d.name = d.data.name;
			d.id = i;
			i += 1;
		});

		// to actually open up the tree graph
		update(root);

		function collapse(d) {
			if (d.children) {
				d._children = d.children;
				d._children.forEach(collapse);
				d.children = null;
			}
		}


		function update(source) {
			const treeData = treemap(root);
			const nodes = treeData.descendants();

			nodes.forEach(function (d) {
				d.y = d.depth * 380;
			});

			const node = g
				.selectAll('.node')
				.data(nodes, (d) => d.id || (d.id = ++i));

			// the starting location of all nodes (aka the tree root's location)
			const nodeEnter = node
				.enter()
				.append('g')
				.attr('class', 'node')
				.attr('id', (d) => d.id)
				.style("cursor", "pointer")
				.attr("transform", function (d) {
					return "translate(" + source.y0 + "," + source.x0 + ")";
				})
				.on('click', click);

			nodeEnter
				.attr("class", "node")
				.attr("r", 1e-6)
				.style("fill", function (d) {
					return d.parent ? "#0C131F" : "#5304EE";
				})

			nodeEnter
				.append("rect")
				.attr("rx", function (d) {
					if (d.parent) return d.children || d._children ? 0 : 6;
					return 10;
				})
				.attr("ry", function (d) {
					if (d.parent) return d.children || d._children ? 0 : 6;
					return 10;
				})
				.attr("stroke-width", function (d) {
					return d.parent ? 1 : 0;
				})
				.attr("stroke", function (d) {
					return d.children || d._children
						? "rgb(3, 192, 220)"
						: "rgb(38, 222, 176)";
				})
				.attr("stroke-dasharray", function (d) {
					return d.children || d._children ? "0" : "2.2";
				})
				.attr("stroke-opacity", function (d) {
					return d.children || d._children ? "1" : "0.6";
				})
				.attr("x", 0)
				.attr("y", -10)
				.attr("width", function (d) {
					return d.parent ? 210 : 100;
				})
				.attr("height", 20);

			// adding text label to each node
			nodeEnter
				.append("text")
				.style("fill", function (d) {
					if (d.parent) {
						return d.children || d._children ? "#ffffff" : "rgb(38, 222, 176)";
					}
					return "rgb(39, 43, 77)";
				})
				.style("font", "18px sans-serif")
				.attr("dy", ".35em")
				.attr("x", function (d) {
					return d.parent ? 105 : 50;
				})
				.attr("text-anchor", function (d) {
					return "middle";
				})
				.text(function (d) {
					return d.data.name;
				});

			// we are merging the original spot to the child point (overrwriting the objects)
			const nodeUpdate = nodeEnter.merge(node);

			// created the location that will move the children to their designated spots
			nodeUpdate
				.transition()
				.duration(duration)
				.attr("transform", function (d) {
					console.log('update');
					return "translate(" + d.y + "," + d.x + ")";
				});

			// style the child node at its correct location
			nodeUpdate
				.select('circle')
				// .attr('r', 6.5)
				.attr('fill', (d) => (d._children ? "#ffffff" : "rgb(38, 222, 176)")) //! diff circle fill for parent / child after child moves
				.attr('cursor', (d) => {
					if (d._children || d.children) return 'pointer';
				}); //! to remove the cursor pointer if a child

			nodeUpdate
				.select('text')
				.style('fill', (d) =>
					d._children || d.children ? "#ffffff" : "rgb(38, 222, 176)"
				) // ! change color of text if parent
				.style('font-weight', (d) =>
					d._children || d.children ? 'bolder' : 'normal'
				) // ! to make parent text bold
				.style('fill-opacity', 1)

			// defining the "disappearance" of the children nodes of the collapsed parent node
			const nodeExit = node
				.exit()
				.transition()
				.duration(duration)
				.attr("transform", function (d) {
					return "translate(" + source.y + "," + source.x + ")";
				})
				.remove();

			// styling the invisibility of the collapsed child
			nodeUpdate.select("circle").style("opacity", 1e-6);
			nodeUpdate.select("circle").attr("r", 1e-6);
			nodeExit.select('text').style('fill-opacity', 1e-6);

			nodes.forEach((d) => {
				d.x0 = d.x;
				d.y0 = d.y;
			});

			/******** LINKS (PATH) *******/

			// defining the number of links we need, excluding the root
			const links = nodes.slice(1);

			const link = svg.selectAll("path.link").data(links, function (d) {
				return d.id;
			});

			// starts the links at the parent's previous position
			const linkEnter = link
				.enter()
				.insert("path", "g")
				.attr("class", "link")
				.attr("d", function (d) {
					var o = { x: source.x0, y: source.y0 };
					return diagonal(o, o);
				});

			const linkUpdate = linkEnter.merge(link);
			linkUpdate
				.transition()
				.duration(duration)
				.attr("d", function (d) {
					return diagonal(d, d.parent);
				});

			const linkExit = link
				.exit()
				.transition()
				.duration(duration)
				.attr("d", function (d) {
					var o = { x: source.x, y: source.y };
					return diagonal(o, o);
				})
				.remove();

			nodes.forEach(function (d) {
				d.x0 = d.x;
				d.y0 = d.y;
			});

			function diagonal(s, d) {
				return `M ${s.y} ${s.x}
            C ${(s.y + (d.y)) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
			}

			function click(event, d) {
				if (d.children) {
					d._children = d.children;
					d.children = null;
				} else {
					d.children = d._children;
					d._children = null;
				}
				update(d);
			}

			d3.selectAll('path')
				.attr('fill', 'none')
				.attr('stroke', 'rgb(55,68,105)')
				.attr('stroke-width', 1)

		}
	}

	useEffect(visualTree, [])

	return (
		<div style={{ background: "#0C131F" }}>
			<svg id='visualDisplay'></svg>
		</div>
	)

}
