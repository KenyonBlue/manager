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
                    />
                </CardSection>

                <CardSection>   
                <Input 
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

export default connect(null, { emailChanged })(LoginForm);