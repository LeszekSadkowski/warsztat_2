require('../index.html'); //zeby webpack przeladowywal html -  nic innego nie robi
require('../scss/style.scss'); //zeby sie style kompilowaly webpackiem
//-------------------------------------

import {Slider} from './_slides';
$(function(){

    const slider= new Slider("#banner",{
        auto:false
    });



});