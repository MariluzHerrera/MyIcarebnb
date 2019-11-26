import "bootstrap";
import { initMapbox } from "./map";
import { initSweetalert } from './init_sweetalert';

initMapbox();


initSweetalert('#sweet-alert-demo', {
  title: "Thank You For Your Booking Request",
  text: "A booking request has been sent to the host",
  icon: "success",
  confirmButtonColor: '#8CD4F5'
});


