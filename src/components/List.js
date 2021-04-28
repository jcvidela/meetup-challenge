import React from 'react';
import PropTypes from 'prop-types';
import { Transitioning } from 'react-native-reanimated';
import { ListItem } from '../components';
import { transition } from '../helpers';

const List = ({ list }) => {
  const ref = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(null);

  function handlePress(id) {
    ref.current.animateNextTransition(); // trigger transition
    return setCurrentIndex(id === currentIndex ? null : id); // set pressed button to state
  }

  return (
    <>
      <Transitioning.View ref={ref} transition={transition} style={{ paddingBottom: 50 }}>
        {list.map((item) => (
          <ListItem item={item} handlePress={() => handlePress(item.id)} expanded={item.id === currentIndex} key={item.id} />
        ))}
      </Transitioning.View>
    </>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
