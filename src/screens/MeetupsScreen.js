import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CreateMeetup, CustomModal as Modal, WeatherInfo, Card, List, Button as FloattingButton } from '../components';
import { useLoggedIn } from '../hooks/useLogged';
import axios from 'axios';

import closeIcon from '../assets/cancel.png';

const HomeScreen = () => {
  const { isLogged } = useLoggedIn();
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [meetups, setMeetups] = React.useState([]);

  React.useEffect(retrieveMeetups, []);

  function onToggleModalVisbility() {
    setModalVisibility(!modalVisibility);
  }

  function retrieveMeetups() {
    axios
      .get('https://birras-santander.herokuapp.com/meetups')
      .then((x) => setMeetups(x.data))
      .catch((error) => console.log(error));
  }

  function handleCreateMeetup(data) {
    axios
      .post('https://birras-santander.herokuapp.com/meetups/create', data)
      .then((meetup) => {
        setMeetups(meetup.data);
        onToggleModalVisbility();
      })
      .catch((error) => console.log(error));
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal visible={modalVisibility} onDismiss={onToggleModalVisbility} transparent animationType="fade">
          <TouchableOpacity onPress={onToggleModalVisbility}>
            <Image source={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>

          <View style={{ alignItems: 'center' }}>
            <CreateMeetup onCreateNewMeetup={handleCreateMeetup} />
          </View>
        </Modal>

        <View style={{ margin: 30 }}>
          <View>
            <Text style={styles.welcomeText}>
              Bienvenido,
              <Text style={styles.userName}> {isLogged.username ? isLogged.username : 'Cargando...'}!</Text>
            </Text>
          </View>

          <View style={{ marginVertical: 50 }}>
            <Card>
              <WeatherInfo />
            </Card>
          </View>

          {meetups.length > 0 ? <List list={meetups} /> : <Text style={{ textAlign: 'center' }}>No hay meetups todavía!</Text>}
        </View>
      </ScrollView>

      {isLogged.role === 'ADMIN' && <FloattingButton handlePress={onToggleModalVisbility} text="Crear Meetup" style={styles.floatting} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    color: 'black',
  },
  userName: {
    fontWeight: 'bold',
    color: '#6C16B9',
  },
  closeIcon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  floatting: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
