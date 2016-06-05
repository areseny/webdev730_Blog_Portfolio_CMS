import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'clientActions/posts';
import Item from 'clientComponents/posts/indexes/Item/index';
import styles from'./styles.scss';
import Infinite from 'react-infinite';
class PostsIndex extends Component {
  
  constructor(props) {
    super(props);

    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    console.log('didMount');
    console.log(this.props)
    let params = {}
    if (this.props.hasOwnProperty('location')) {
      params.tag = this.props.location.query.tag
    }
    console.log(params)
    this.props.fetchPosts(params);
  }

  componentWillReceiveProps (nextProps) {
    // TODO: figure out how to insert hyphen in the queries so that the query changes from tag to tag-id
    console.log('nextProps');
    if (nextProps.location.query.tag !== this.props.location.query.tag) {
      nextProps.fetchPosts({ tag: nextProps.location.query.tag })
    }
  }
  
  handleLoad() {
    if (this.canLoad()) {
      let params = { page: this.props.page + 1 };
      
      if (this.props.params.hasOwnProperty('location')) {
        params.tag = this.props.params.location.query.tag
      }
      this.props.fetchPosts(params);
    }
  }

  canLoad() {
    return (this.props.total - (this.props.limit * this.props.page)) > 0
  }

  renderItems() {
    return (
      <Infinite
        infiniteLoadBeginEdgeOffset={400}
        onInfiniteLoad={this.handleLoad}
        containerHeight={700}
        elementHeight={100}
        useWindowAsScrollContainer
      >
        {this.props.posts.map((post, index) => {
          return (
            <Item key={index} post={post} />
          );
        })}
      </Infinite>
    );
  }

  render() {
    if(!this.props.posts || this.props.posts.length === 0 ) {
      return <div></div>
    }
    return (
      <section className={styles.root}>
        <h1 className={styles.title}>POSTS</h1>
        {this.renderItems()}
      </section>
    );
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  fetchPosts: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { 
    posts: state.posts.posts, 
    page: state.posts.page, 
    limit: state.posts.limit, 
    total: state.posts.total 
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);