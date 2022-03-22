import React, { useContext, useEffect } from 'react';
import * as d3 from 'd3';
import classes from '../../styles/SchemaVisual.module.css';

import { SchemaContext } from '../context/global-context';

export default function SchemaVisual() {

    const { sqlState, sqlDispatch } = useContext(SchemaContext);

    const treeData = sqlState.visuals;
    console.log(sqlState)

    /////////////
function visualTree() {


    // function responsive(svg) {
    //     // use D3 to create the graph that appears after clicking the 'Visualize' button
    //     const container = d3.select(svg.node().parentNode),
    //       width = parseInt(svg.style("width")),
    //       height = parseInt(svg.style("height"));
    //     svg.attr("viewBox", "0 0 " + width + " " + height)
    //       .attr("perserveAspectRatio", "xMidYMid")
    //       .call(resize);
    //     d3.select(window).on("resize." + container.attr("id"), resize);
  
    //     function resize() {
    //       const targetWidth = parseInt(container.style("width"));
    //       svg.attr("width", targetWidth);
    //       svg.attr("height", "calc(100vh - 70px)");
    //     }
    //   }

    let margin = { top: 40, right: 90, bottom: 30, left: 90 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    let svg = d3
        .select("#TheVisuals")
        .append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom)
        // .call(responsive)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let i = 0,
        duration = 750,
        root;

    let treemap = d3.tree().size([height, width]);
    
    root = d3.hierarchy(treeData, function (d) {
        return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;
    // root.children.forEach(collapse);

    // update(root);
    // function collapse(d) {
    //     if (d.children) {
    //         d._children = d.children;
    //         d._children.forEach(collapse);
    //         d.children = null;
    //     }
    // }

    function update(source) {
        let treeData = treemap(root);
        let nodes = treeData.descendants(),
            links = treeData.descendants().slice(1);
        nodes.forEach(function (d) {
            d.y = d.depth * 180;
        });
        const node = svg.selectAll("g.node").data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });
        let nodeEnter = node
            .enter()
            .append("g")
            .attr("class", "node")
            // .style("cursor", "pointer")
            .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on("click", click);

        // nodeEnter
        //     .attr("class", "node")
        //     .attr("r", 1e-6)
        //     .style("fill", function (d) {
        //         return d.parent ? "rgb(39, 43, 77)" : "#fe6e9e";
        //     });
            
        nodeEnter.append('ellipse')
        .attr('class', 'ellipse')
        .style("fill", function (d) {
          return d._children ? fillColor : "#fff";
        })

        // nodeEnter
        //     .append("rect")
        //     .attr("rx", function (d) {
        //         if (d.parent) return d.children || d._children ? 0 : 6;
        //         return 10;
        //     })
        //     .attr("ry", function (d) {
        //         if (d.parent) return d.children || d._children ? 0 : 6;
        //         return 10;
        //     })
        //     .attr("stroke-width", function (d) {
        //         return d.parent ? 1 : 0;
        //     })
        //     .attr("stroke", function (d) {
        //         return d.children || d._children
        //             ? "rgb(3, 192, 220)"
        //             : "rgb(38, 222, 176)";
        //     })
        //     .attr("stroke-dasharray", function (d) {
        //         return d.children || d._children ? "0" : "2.2";
        //     })
        //     .attr("stroke-opacity", function (d) {
        //         return d.children || d._children ? "1" : "0.6";
        //     })
        //     .attr("x", 0)
        //     .attr("y", -10)
        //     .attr("width", function (d) {
        //         return d.parent ? 40 : 20;
        //     })
        //     .attr("height", 20);

            // console.log('hello')
        // nodeEnter
        //     .append("text")
        //     .style("fill", function (d) {
        //         if (d.parent) {
        //             return d.children || d._children ? "#ffffff" : "rgb(38, 222, 176)";
        //         }
        //         return "rgb(39, 43, 77)";
        //     })
        //     .style("font", "10px sans-serif")
        //     .attr("dy", ".35em")
        //     .attr("x", function (d) {
        //         return d.parent ? 20 : 10;
        //     })
        //     .attr("text-anchor", function (d) {
        //         return "middle";
        //     })
        //     .text(function (d) {
        //         return d.data.name;
        //     });
        nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("text-anchor", 'middle')
      .text(function (d) {
        if (d.depth % 2 === 0) return d.data.name;
        return `${d.data.name}: ${d.data.type}`
      })
      .attr('font-size', '0.7em')
      .attr('cursor', 'pointer');

        let nodeUpdate = nodeEnter.merge(node);

        nodeUpdate
            .transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            })
            .attr('cursor', 'pointer')


        let nodeExit = node
            .exit()
            .transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

            nodeExit.select('ellipse')
      .attr('rx', 1e-6)
      .attr('ry', 1e-6);

        // nodeExit.select("rect").style("opacity", 1e-6);
        // nodeExit.select("rect").attr("stroke-opacity", 1e-6);
        // nodeExit.select("text").style("fill-opacity", 1e-6);
        
        nodeExit.select('text')
        .style('fill-opacity', 1e-6);

let link = svg.selectAll("path.link").data(links, function (d) {
            return d.id;
        });

        let linkEnter = link
            .enter()
            .insert("path", "g")
            .attr("class", "link")
            // .style("fill", "none")
            // .style("stroke", "rbg(55, 68, 105")
            // .style("stroke-width", "4px")
            .attr("d", function (d) {
                let o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            });
        let linkUpdate = linkEnter.merge(link);
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
                let o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
            .remove();

        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });

        function diagonal(s, d) {
            const path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;

            return path;
        }

        function click(d) {
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
        .attr('stroke', '#DD399C')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', '1')
        
        d3.selectAll('ellipse')
        .attr('rx', 86)
        .attr('ry', 21)
        .attr('stroke', 'rgba(0, 0, 0, 0.18')
        .attr('stroke-width', 0.5)
        .attr('fill', 'white')
        
        // GLOW effect
        const defs = svg.append("defs");
        const colors = ["#A852E5", "#14BDEB", "#0D18E8"];
        
        //set color (white glow) for parent node
        const filter0 = defs.append("filter")
        .attr("id", "glow0");
        filter0.append("feGaussianBlur")
        .attr("stdDeviation", "5")
        .attr("result", "coloredBlur");
        const feMerge0 = filter0.append("feMerge");
        feMerge0.append("feMergeNode")
        .attr("in", "coloredBlur");
        feMerge0.append("feMergeNode")
        .attr("in", "SourceGraphic");
        
        // set color for queries
        const filter1 = defs.append("filter")
        .attr("id", "glow1");
        
        filter1.append("feMorphology")
        .attr("operator", "dilate")
        .attr("radius", 1.5)
        .attr("in", "SourceAlpha")
        .attr("result", "thicken");
        
        filter1.append("feGaussianBlur")
        .attr("in", "thicken")
        .attr("stdDeviation", "2")
        .attr("result", "blurred");
        
        filter1.append("feFlood")
        .attr("flood-color", colors[0])
        .attr("result", "glowColor")
        
        filter1.append("feComposite")
        .attr("in", "glowColor")
        .attr("in2", "blurred")
        .attr("operator", "in")
        .attr("result", "softGlow_colored")
        
        const feMerge1 = filter1.append("feMerge");
        feMerge1.append("feMergeNode")
        .attr("in", "softGlow_colored");
        feMerge1.append("feMergeNode")
        .attr("in", "SourceGraphic");
        
        // set color for types
        const filter2 = defs.append("filter")
        .attr("id", "glow2");
        
        filter2.append("feMorphology")
        .attr("operator", "dilate")
        .attr("radius", 1.5)
        .attr("in", "SourceAlpha")
        .attr("result", "thicken");
        
        filter2.append("feGaussianBlur")
        .attr("in", "thicken")
        .attr("stdDeviation", "2")
        .attr("result", "blurred");
        
        filter2.append("feFlood")
        .attr("flood-color", colors[1])
        .attr("result", "glowColor")
        
        filter2.append("feComposite")
        .attr("in", "glowColor")
        .attr("in2", "blurred")
        .attr("operator", "in")
        .attr("result", "softGlow_colored")

      const feMerge2 = filter2.append("feMerge");
      feMerge2.append("feMergeNode")
      .attr("in", "softGlow_colored");
      feMerge2.append("feMergeNode")
      .attr("in", "SourceGraphic");
      
      // set color for queryable
      const filter3 = defs.append("filter")
      .attr("id", "glow3");
      
      filter3.append("feMorphology")
      .attr("operator", "dilate")
      .attr("radius", 1.5)
      .attr("in", "SourceAlpha")
      .attr("result", "thicken");
      
      filter3.append("feGaussianBlur")
      .attr("in", "thicken")
      .attr("stdDeviation", "2")
      .attr("result", "blurred");
      
      filter3.append("feFlood")
      .attr("flood-color", colors[2])
      .attr("result", "glowColor")
      
      filter3.append("feComposite")
      .attr("in", "glowColor")
      .attr("in2", "blurred")
      .attr("operator", "in")
      .attr("result", "softGlow_colored")
      
      const feMerge3 = filter3.append("feMerge");
      feMerge3.append("feMergeNode")
      .attr("in", "softGlow_colored");
      feMerge3.append("feMergeNode")
      .attr("in", "SourceGraphic");
      
      
      d3.selectAll(".ellipse")
      .style("filter", (d) => {
        if (d.depth === 0) return "url(#glow0)";
        if (d.depth === 1) return "url(#glow1)";
        if (d.depth === 2) return "url(#glow2)";
        if (d.depth === 3) return "url(#glow3)";
      })
      .style("fill", function (d) {
        return d._children ? fillColor : "#fff";
      });
      

    }
    update(root);
}

    useEffect( visualTree,[])

    return (
        <div style={{background: "rgb(39, 43, 77"}}>
            <div id="TheVisuals"></div>
        </div>
    )

}
