import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsBuffers from '../actions/buffers';
import * as actionsInstructions from '../actions/instructions';
import Instructions from '../components/Instructions';
import Editor from '../components/Editor';
import Output from '../components/Output';
import ModalName from '../components/ModalName';
import ProgressMeter from '../components/ProgressMeter';

export const CourseContainer = (props) => {
  return (
    <div className="wrapper-course">
      <div className="container-progression">
        <ProgressMeter state={props.stateInstructions}/>
      </div>
      <div className="container-main">
        <Instructions
          state={props.stateInstructions}
          actions={props.actionsInstructions} />
        <Editor
          state={props.stateBuffers}
          actions={props.actionsBuffers} />
        <div className="gutter-right" />
        <Output
          state={props.stateBuffers} />
      </div>
      <div className="container-footer">
        Footer
      </div>
    </div>
  );
};

CourseContainer.propTypes = {
  actionsBuffers      : PropTypes.object.isRequired,
  actionsInstructions : PropTypes.object.isRequired,
  stateBuffers        : PropTypes.array.isRequired,
  stateInstructions   : PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    stateBuffers: state.buffers,
    stateInstructions: state.instructions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionsBuffers: bindActionCreators(actionsBuffers, dispatch),
    actionsInstructions: bindActionCreators(actionsInstructions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseContainer);
