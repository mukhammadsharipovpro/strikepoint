import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import StrikePointHeader from '../components/StrikePointHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <StrikePointHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NHL', '03.01 19:00', 'Boston Bruins \n' + 'Washington Capitals')}
        {renderBroadcast('KHL', '05.01 20:15', 'SKA Saint Petersburg \n' + 'CSKA Moscow')}
        {renderBroadcast('IIHF', '07.01 18:30', 'Sweden \n' + 'Canada')}
        {renderBroadcast('SHL', '09.01 19:45', 'Frölunda \n' + 'HV71')}
        {renderBroadcast('Liiga', '11.01 17:00', 'Kärpät \n' + 'Tappara')}
        {renderBroadcast('DEL', '13.01 21:00', 'Eisbären Berlin \n' + 'Adler Mannheim')}
        {renderBroadcast('NCAA', '15.01 16:30', 'Minnesota Golden Gophers \n' + 'Michigan Wolverines')}
        {renderBroadcast('Swiss League', '17.01 18:15', 'EV Zug \n' + 'SC Bern')}
        {renderBroadcast('AHL', '19.01 19:00', 'Chicago Wolves \n' + 'Hershey Bears')}
        {renderBroadcast('Czech liga', '21.01 20:30', 'Sparta Prague \n' + 'HC Kometa Brno')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingVertical: 5,
  },
});
