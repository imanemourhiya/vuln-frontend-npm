import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
import $ from 'jquery';

const message = _.template('Bonjour <%= name %>, nous sommes le <%= date %>.')({
  name: 'DevSecOps',
  date: moment().format('DD/MM/YYYY'),
});

$('#msg').text(message);
console.log('axios charge :', typeof axios.get === 'function');
