import React, {Component} from 'react';
import {View} from 'react-native';
import {theme} from './theme';

const styles = {
  container: {
    height: '100%',
    width: '100%',
  },
};

export class SimpleTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    };
    theme.defaults = props.defaultTheme;
    theme.additionalThemes = props.additionalThemes;
  }

  forceRefresh = () => {
    this.setState(prevState => ({key: prevState.key + 1}));
  };

  componentDidMount() {
    theme.addThemeChangeListener(this.forceRefresh);
  }

  componentWillUnmount() {
    theme.removeThemeChangeListener();
  }

  render() {
    <View key={this.state.key} style={styles.container}>
      {this.props.children}
    </View>;
  }
}
