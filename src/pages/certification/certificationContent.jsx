import React from 'react';

import Icon from 'antd/lib/icon';

import './certificationContent.scss';

class CertificationContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'mail@example.io',
            name: 'mock user',
            status: 'error',
            isShowImage: false,
            certToken: '',
        };
    }
    getAlertType(status) {
        let type = ['error', 'warn'].filter( type => status.toLowerCase().includes(type))[0];
        return  type || 'successful';
    }

    fetchCertificationApi = (api = '') => {
        fetch(api).then(data => {
            this.setState({
                status: data.status,
                certToken: data.certificationToken
            });
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, name } = this.state;
        console.log(email);
        console.log(name);
        // const tokenApi = "";
        // this.fetchCertificationApi(tokenApi);
        // mock data
        const mockStatusMap = {
            successful: 'successful',
            error: 'error',
            warn: 'warn'
        };

        this.setState({
            status: mockStatusMap[name] || 'error'
        });
    };
    
    handleResizing = () => void this.setState({ isShowImage: window.innerWidth > 1200 });

    handleEmailChange = (e) => void this.setState({email: e.target.value});

    handleNameChange = (e) => void this.setState( {name: e.target.value});

    componentDidMount() {
        this.handleResizing();
        window.addEventListener('resize', this.handleResizing);
    }

    componentDidUpdate() {
        window.addEventListener('resize', this.handleResizing);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizing);
    }

    render() {
        const iconTypeMap = {
            successful: 'check-circle',
            error: 'close-circle',
            warn: 'exclamation-circle',
        }; 
        const { formText, alertMsgs } = this.props.dataSource;
        const alertType = this.getAlertType(this.state.status);
        return (
            <section>
                <div className="certification-content">
                    <div className={`certification-content-alerts row ${alertType}`}>
                        <Icon type={iconTypeMap[alertType]} theme="filled" /> 
                        <span className="alert-msg">
                            {alertMsgs[this.state.status]}
                        </span>
                    </div>
                    <div className="certification-content-main row">
                        {
                            this.state.isShowImage && 
                            <aside className="column">
                                <figure>
                                    <img src="/images/certification/illustration.png" />
                                </figure>
                            </aside>
                        }
                        <form className="column" onSubmit={this.handleSubmit}>
                            <fieldset>
                                <legend>{formText.header}</legend>
                                <div className="form-row email">
                                    <label>{formText.emailLabel}</label>
                                    <input type="email" name="mail" value={this.state.email} onChange={this.handleEmailChange}/>
                                </div>
                                <div className="form-row name">
                                    <label>{formText.nicknameLabel}
                                        <span className="description">{formText.nicknameDescription}</span>
                                    </label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                                </div>
                                <div className="form-row action">
                                    <input type="submit" value={formText.action} />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default CertificationContent