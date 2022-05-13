import React from 'react'

export default function LandingPage() {

var timer = new Timer();
timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});
  return (
    <div>
        <div id="basicUsage">00:00:00</div>
    </div>
  )
}
