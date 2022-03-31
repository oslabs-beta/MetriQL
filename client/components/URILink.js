import React, { useContext, useState } from "react";
import { URLContext } from "../context/global-context";

import { secret } from "../../server/generator/testPSQL";
import cryptoJs from "crypto-js";
import classes from "../../styles/URILink.module.css";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const URILink = ({ closeHandler }) => {
  const { urlState, urlDispatch } = useContext(URLContext);

  const handleChange = (e) => {
    urlDispatch({
      type: "UPDATE_INPUT_URL",
      payload: e.target.value,
    });
    urlDispatch({
      type: "UPDATE_ENTRY_ERROR",
      payload: false,
    });
    urlDispatch({
      type: "UPDATE_INVALID_ERROR",
      payload: false,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    if (e.target.value === "submitNew" || e.key === "Enter") {
      if (urlState.inputURL) {
        // i think we should sanitize newUrl against SQL injections
        let encryptedUrl = cryptoJs.AES.encrypt(
          urlState.inputURL,
          secret
        ).toString();
        requestOptions.body = JSON.stringify({ uri: encryptedUrl });

        urlDispatch({
          type: "UPDATE_URL",
          payload: {
            url: encryptedUrl,
          },
        });
      } else {
        return urlDispatch({
          type: "UPDATE_ENTRY_ERROR",
          payload: true,
        });
      }
    }

    const result = await fetch("http://localhost:8080/schema", requestOptions);
    const jsonData = await result.json();

    if (!jsonData.schema) {
      urlDispatch({
        type: "UPDATE_INPUT_URL",
        payload: "",
      });
      urlDispatch({
        type: "UPDATE_INVALID_ERROR",
        payload: true,
      });
    } else {
      urlDispatch({
        type: "UPDATE_SCHEMA",
        payload: {
          types: jsonData.schema.types,
          resolvers: jsonData.schema.resolvers,
          visuals: jsonData.visuals
        },
      });
      return closeHandler();
    }
  };

  return (
    <div className={classes.modal}>
      <Box
        sx={{
          backgroundColor: "#f6f0ff",
          width: 400,
          height: 350,
        }}
        className="w-screen"
        textAlign="center"
      >
        {urlState.invalidError ? (
          <DialogTitle sx={{ color: "red" }}>
            Please submit a valid URL
          </DialogTitle>
        ) : (
          <DialogTitle>Enter your Database URL</DialogTitle>
        )}
        <TextField
          sx={{
            paddingBottom: 1,
          }}
          label="Database Link"
          type="text"
          value={urlState.inputURL}
          placeholder="Your Database Link"
          onChange={handleChange}
          className={classes.InputURI}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submitHandler(e);
            }
          }}
        ></TextField>

        <button
          sx={{ width: 156 }}
          variant="contained"
          value="submitNew"
          onClick={submitHandler}
          class="mb-6 bg-purple hover:bg-purple1 text-white font-bold py-2 px-4 rounded"
        >
          Submit URL
        </button>
        <br />
        <hr />
        <br />
        {urlState.entryError ? (
          <DialogContent
            sx={{ marginTop: -3, color: "red", font: "sans-serif" }}
          >
            Press "Use Default DB" to use our default database
          </DialogContent>
        ) : (
          <DialogContent sx={{ marginTop: -3, font: "sans-serif" }}>
            Press "Use Default DB" to use our default database
          </DialogContent>
        )}
        <button
          sx={{ width: 156 }}
          variant="contained"
          value="submitDefault"
          onClick={submitHandler}
          class="bg-purple mb-6 hover:bg-purple1 text-white font-bold py-2 px-4 rounded"
        >
          Use Default DB
        </button>
      </Box>
    </div>
  );
};

export default URILink;
