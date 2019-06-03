import React, { Component } from "react";
import "./NotesItem.scss";

//TODO: REMOVE THIS
import image from "./../../Images/Notes.jpg";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

export default class NotesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      file: this.props.file,
      date: "March 12, 2019",
      positionNumber: 1,
      name: "Default Name",
      author: "Mr. Awesome"
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    return (
      <div>
        <Document
          file={"http://localhost:8000/getFile?name=response.pdf"}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={this.state.pageNumber} />
        </Document>
        <p>
          Page {this.state.pageNumber} of {this.state.numPages}
        </p>
        <p>{this.state.name}</p>
        <p>{"Author: " + this.state.author}</p>
        <p>{"Last Updated: " + this.state.date}</p>
      </div>
    );
  }
}
