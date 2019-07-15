import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style.scss";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import removeHTMLTags from "react-render-html";

class SideNavItem extends Component {
  render() {
    const { _index, _note, classes, selectedNoteIndex } = this.props;

    return (
      <div key={_index}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          alignItems="flex-start"
        >
          <div
            className={classes.textSection}
            onClick={() => this.props.selectNote(_note, _index)}
          >
            <ListItemText primary={_note.title} />
          </div>
          <DeleteIcon
            onClick={() => this.deleteNote(_note)}
            className={classes.deleteIcon}
          />
        </ListItem>
      </div>
    );
  }
  selectNote = (note, index) => this.props.selectNote(note, index);
  deleteNote = note => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  };
}
export default withStyles(styles)(SideNavItem);
