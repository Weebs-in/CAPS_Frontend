import React, { Component } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import { withTranslation } from "react-i18next";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
        <Component
            {...props}
            router={{ location, navigate, params }}
        />
    );
  }

  return ComponentWithRouterProp;
}

class App extends Component {
  state = {};

  componentDidMount() {
    this.onRouteChanged();
  }

  render() {
    const navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : null;
    const sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : null;
    const footerComponent = !this.state.isFullPageLayout ? <Footer /> : null;

    return (
        <div className="container-scroller">
          {sidebarComponent}
          <div className="container-fluid page-body-wrapper">
            {navbarComponent}
            <div className="main-panel">
              <div className="content-wrapper">
                <AppRoutes />
              </div>
              {footerComponent}
            </div>
          </div>
        </div>
    );
  }

  componentDidUpdate(prevProps, _prevState, _snapshot) {
    if (this.props.router.location !== prevProps.router.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log('ROUTE CHANGED');
    //const { i18n } = this.props;
    //const body = document.querySelector('body');

    //I commented this out because it seems to be for language changes
    // if (this.props.router.location.pathname === '/layout/RtlLayout') {
    //   body.classList.add('rtl');
    //   i18n.changeLanguage('ar');
    // } else {
    //   body.classList.remove('rtl');
    //   i18n.changeLanguage('en');
    // }

    window.scrollTo(0, 0);

    const fullPageLayoutRoutes = [
      '/user-pages/login-1',
      '/user-pages/login-2',
      '/user-pages/register-1',
      '/user-pages/register-2',
      '/user-pages/lockscreen',
      '/error-pages/error-404',
      '/error-pages/error-500',
      '/general-pages/landing-page',
    ];

    const isFullPageLayout = fullPageLayoutRoutes.includes(
        this.props.router.location.pathname
    );
    this.setState({ isFullPageLayout });

    const pageBodyWrapper = document.querySelector('.page-body-wrapper');
    if (isFullPageLayout) {
      pageBodyWrapper.classList.add('full-page-wrapper');
    } else {
      pageBodyWrapper.classList.remove('full-page-wrapper');
    }
  }
}

export default withTranslation()(withRouter(App));