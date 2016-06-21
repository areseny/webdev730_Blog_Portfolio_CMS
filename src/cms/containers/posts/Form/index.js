import React, { Component, PropTypes } from 'react';
import { fetchEditPost, fetchNewPost, savePost } from 'cmsActions/posts';
import { createItem, updateItem, deleteItem, moveItem, cancelItem } from 'cmsActions/items';
import { createTag, deleteTag } from 'cmsActions/tags';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import EditBox from '../../../components/posts/forms/Item/Form/EditBox/index';
import TextField from 'material-ui/TextField';
import DatePicker from '../../../components/shared/CustomDatePicker/index';
import RaisedButton from 'material-ui/RaisedButton';
import Item from '../../../components/posts/forms/Item/index';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import TagField from '../../../components/shared/TagField/index';
import styles from './styles.scss';


const propTypes = {
  fields: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  params: PropTypes.object,
  fetchEditPost: PropTypes.func.isRequired,
  fetchNewPost: PropTypes.func.isRequired,
  savePost: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  cancelItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  moveItem: PropTypes.func.isRequired,
  createTag: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired
};

const inlineStyles = {

  indicator: {
    display: 'inline-block', 
    position: 'relative'
  },
  textField: {
    marginBottom: 10
  }
};

class PostForm extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit  = this.handleSubmit.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleCancelItem = this.handleCancelItem.bind(this);
    this.handleMoveItem = this.handleMoveItem.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleDeleteTag = this.handleDeleteTag.bind(this);
  }

  componentWillMount() {
    if (this.props.params.id) {
      this.props.fetchEditPost(this.props.params.id)
    } else {
      this.props.fetchNewPost()
    }
  }

  handleSubmit(props) {
    this.props.savePost(
      { 
        post: { 
          ...props, 
          itemsAttributes: this.props.items, 
          taggingsAttributes: this.props.tags
        }
      }
    );
  }

  handleAddItem(targetType) {
    this.props.createItem(targetType);
  }

  handleUpdateItem(sortRank, item) {
    this.props.updateItem(sortRank, item);
  }

  handleDeleteItem(sortRank) {
    this.props.deleteItem(sortRank);
  }
  
  handleCancelItem(sortRank, item) {
    this.props.cancelItem(sortRank, item);
  }

  handleMoveItem(sortRank, type) {
    this.props.moveItem(sortRank, type)
  }

  handleAddTag(tag) {
    this.props.createTag(tag);
  }

  handleDeleteTag(sortRank) {
    this.props.deleteTag(sortRank);
  }


  renderItems() {

    return (
      <section className={styles.itemContainer}>
        <ul className={styles.itemList}>
          {this.props.items.map((item, index) => {
            return (
              <Item
                key={index}
                sortRank={index}
                item={item}
                totalCount={this.props.items.length-1}
                handleUpdateItem={this.handleUpdateItem}
                handleDeleteItem={this.handleDeleteItem}
                handleCancelItem={this.handleCancelItem}
                handleMoveItem={this.handleMoveItem}
              />
            );
          })}
        </ul>
      </section>
    );
  }
  
  
  render() {
    const submitLabel = this.props.params.id ? 'Update' : 'Create';
    const { handleSubmit, submitting, fields: { title, publishedAt, leadSentence } } = this.props;
    
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)} className={styles.root}>
        <h2 className={styles.heading}>{`${submitLabel} Post`}</h2>
        <TextField
          {...title}
          floatingLabelText="Title"
          hintText="Enter Title"
          fullWidth={true}
          errorText={title.touched && title.error ? title.error : ''}
          style={inlineStyles.textField}
        />
        <TextField
          {...leadSentence}
          floatingLabelText="Lead Sentence"
          hintText="Enter Lead Sentence"
          fullWidth={true}
          style={inlineStyles.textField}
        />
        <div className={styles.dateField} >
          <label className={styles.label}>Published At</label>
          <DatePicker
            className={styles.datapicker}
            container="inline"
            autoOk={true}
            placeholder="PublishedAt"
            errorText={publishedAt.touched && publishedAt.error ? publishedAt.error : ''}
            {...publishedAt}
          />
        </div>
        <TagField
          tags={this.props.tags}
          suggestions={this.props.tagSuggestions}
          handleAddTag={this.handleAddTag}
          handleDeleteTag={this.handleDeleteTag}
        />
        {this.renderItems()}
        <EditBox handleAddItem={this.handleAddItem} />
        <button type="submit"
                disabled={submitting}
                className={styles.button}
        >
          {submitLabel}
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter title'
  }
  if (!values.publishedAt) {
    errors.publishedAt = 'Enter published at'
  }
  return errors;
}

export const fields = [
  'id', 'title', 'publishedAt', 'leadSentence'
];

function mapStateToProps(state) {
  return {
    initialValues: state.posts.postForm,
    items: state.items,
    tags: state.tags.tags,
    tagSuggestions: state.tags.tagSuggestions
  }
}

PostForm.propTypes = propTypes;


export default reduxForm({
  form: 'PostForm',
  fields,
  validate
}, mapStateToProps, {
  fetchEditPost,
  fetchNewPost,
  savePost,
  createItem,
  deleteItem,
  cancelItem,
  updateItem,
  moveItem,
  createTag,
  deleteTag
})(PostForm);