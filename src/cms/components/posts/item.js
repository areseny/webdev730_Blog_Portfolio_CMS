import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import IconButton from 'material-ui/lib/icon-button';
import EditorModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
import ContentClear from 'material-ui/lib/svg-icons/content/clear';
import AvAirplay from 'material-ui/lib/svg-icons/av/airplay';
import ActionVisibility from 'material-ui/lib/svg-icons/action/visibility';
import ActionVisibilityOff from 'material-ui/lib/svg-icons/action/visibility-off';

export default class PostItem extends Component {

  constructor(props) {
    super(...props);

    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleTogglePost = this.handleTogglePost.bind(this);
  }

  handleDeletePost() {
    this.props.handleDeletePost(this.props.post.id);
  }

  handleTogglePost() {
    this.props.handleTogglePost(this.props.post.id);
  }

  publishIcon() {
    if (this.props.post.published) {
      return <ActionVisibility className='post-item__visible-icon'/>;
    } else {
      return <ActionVisibilityOff className='post-item__invisible-icon'/>;
    }
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.post.id}</TableRowColumn>
        <TableRowColumn>{this.props.post.title}</TableRowColumn>
        <TableRowColumn>{this.props.post.description}</TableRowColumn>
        <TableRowColumn>Published</TableRowColumn>
        <TableRowColumn>Published Status</TableRowColumn>
        <TableRowColumn>
          <Link to={`/cms/posts/${this.props.post.id}`}>
            <IconButton>
              <AvAirplay />
            </IconButton>
          </Link>
          <Link to={`/cms/posts/${this.props.post.id}/edit`}>
            <IconButton>
              <EditorModeEdit />
            </IconButton>
          </Link>
          <IconButton className='post-item__toggle-button' onClick={this.handleTogglePost}>
            {this.publishIcon()}
          </IconButton>
          <IconButton className='post-item__delete-button' onClick={this.handleDeletePost}>
            <ContentClear />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    )
  }
};

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired
  }).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleTogglePost: PropTypes.func.isRequired
};
