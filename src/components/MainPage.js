import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        { isPending ?
          <h2>Loading...</h2> :
          <CardList robots={this.filterRobots()} />
        }
      </div>
    );
  }
}

export default MainPage;