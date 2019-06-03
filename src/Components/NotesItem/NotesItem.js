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
      file: this.props.file[1],
      date: this.props.file[0],
      positionNumber: 1,
      name: this.props.file[3],
      author: this.props.file[2]
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    return (
      <div>
        <div className="prev-image">
          <Document
            file={"http://localhost:8000/getFile?name=" + this.state.file}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page height={286} pageNumber={this.state.pageNumber} />
          </Document>
        </div>
        <p>{this.state.name}</p>
        <p>{"Author: " + this.state.author}</p>
        <p>{"Last Updated: " + this.state.date}</p>
      </div>
    );
  }
}
