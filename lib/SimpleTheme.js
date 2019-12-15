import React, {Component} from 'react';
import {View} from 'react-native';
import {theme} from './theme';

export class SimpleTheme extends Component {
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
    <View key={this.state.key} style={styles.container}>
      {this.props.children}
    </View>;
  }
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
  },
};
