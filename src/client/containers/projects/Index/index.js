import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from 'clientActions/projects';
import Item from 'clientComponents/projects/indexes/Item/index';
import styles from'./styles.scss';
class ProjectsIndex extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let params = {}
    if (this.props.hasOwnProperty('location')) {
      params.tag = this.props.location.query.tag
    }
    this.props.fetchProjects(params);
  }

  componentWillReceiveProps (nextProps) {
    console.log('nextProps');
    if (nextProps.location.query.tag !== this.props.location.query.tag) {
      nextProps.fetchProjects({ tag: nextProps.location.query.tag })
    }
  }


  render() {
    if(this.props.projects.length === 0 ) { return <div></div> }
    return (
      <section className={styles.root}>
        <h1 className={styles.title}>PROJECTS</h1>
        {this.props.projects.map((project, index) => {
          return <Item key={index} project={project}/>
        })}
      </section>
    );
  }
}

ProjectsIndex.propTypes = {
  projects: PropTypes.array.isRequired,
  fetchProjects: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { projects: state.projects.projects }
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsIndex);