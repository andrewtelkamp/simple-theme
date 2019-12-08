import {Component} from 'react';
import {theme} from './config';

export default class SimpleTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRefresh: false,
    };
    theme.defaults = props.defaultTheme;
    theme.additionalThemes = props.additionalThemes;
  }

  forceRefresh = () => {
    this.setState({shouldRefresh: true}, this.resetShouldRefresh);
  };

  resetShouldRefresh = () => this.setState({shouldRefresh: false});

  componentDidMount() {
    this.activeThemeListener = theme.changeListener(this.forceRefresh);
  }

  componentWillUnmount() {
    this.activeThemeListener();
  }

  render() {
    if (this.state.shouldRefresh) {
      return null;
    }
    return this.props.children;
  }
}
