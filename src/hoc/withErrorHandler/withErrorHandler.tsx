import React, { Component } from "react";
import Aux from "../Auxilary";
import Modal from "../../components/UI/Modal/Modal";
import { render } from "react-dom";
import { AxiosInstance } from "axios";

export interface withErrorHandlerStatePropTypes {
  error: boolean;
  message: string;
}

const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return class extends Component {
    state: withErrorHandlerStatePropTypes = {
      error: false,
      message: "Error occured"
    };
    componentWillMount() {
      //this clears errors when request is made
      axios.interceptors.request.use((req: string) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res: string) => res,
        (error: string) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
