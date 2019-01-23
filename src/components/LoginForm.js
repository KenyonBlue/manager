import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input,  ButtonLogin } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    state = {  }
    render() {
        return (
            <Card>
                <CardSection>    
                    <Input 
                    label='Email'
                    placeholder= 'email@gmail.com'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardSection>

                <CardSection>   
                <Input 
                    secureTextEntry
                    label='Password'
                    placeholder= 'password'
                    // onChangeText={this.onPasswordChange.bind(this)}
                    /> 
                </CardSection>

                <CardSection>    
                    <ButtonLogin>
                        Login
                    </ButtonLogin>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);