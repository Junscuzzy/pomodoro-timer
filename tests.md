#Technology Stack

8. I can see an element with corresponding id="time-left".
   NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

time-left is not formatted correctly: expected '25' to equal '60'

AssertionError: time-left is not formatted correctly: expected '25' to equal '60'
at Proxy.c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:549:1881)
at Proxy.l (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:431:130)
at Function.n.strictEqual (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:574:655)
at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:180993)
at c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35224)
at i.p.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35154)
at T.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41723)
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:42605
at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41019)
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41088
at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40141)
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40906
at f (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:593:1377)

#Timer

6. I should not be able to set a session or break length to <= 0.

Value in element with id of "break-length" is less than 1.: expected '0' to equal '1'

AssertionError: Value in element with id of "break-length" is less than 1.: expected '0' to equal '1'
at Proxy.c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:549:1881)
at Proxy.l (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:431:130)
at Function.n.strictEqual (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:574:655)
at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:184173)
at c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35224)
at i.p.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35154)
at T.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41723)
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:42605
at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41019)
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41088
at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40141)
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40906
at f (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:593:1377)

12. When a session countdown reaches zero (NOTE: timer MUST reach 00:00),
    and a new countdown begins, the element with the id of "timer-label"
    should display a string indicating a break has begun.

Timer has not changed.

Error: Timer has not changed.
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:177911

13. When a session countdown reaches zero (NOTE: timer MUST reach 00:00),
    a new break countdown should begin, counting down from
    the value currently displayed in the id="break-length" element.

Timer has not changed.

Error: Timer has not changed.
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:177911

14. When a break countdown reaches zero (NOTE: timer MUST reach 00:00),
    and a new countdown begins, the element with the id of "timer-label"
    should display a string indicating a session has begun.

Timer has not changed.

Error: Timer has not changed.
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:177911

15. When a break countdown reaches zero (NOTE: timer MUST reach 00:00),
    a new session countdown should begin, counting down from
    the value currently displayed in the id="session-length" element.

Timer has not changed.

Error: Timer has not changed.
at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:177911

#Audio

1. When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 <audio> tag and have a corresponding id="beep".
   There is no audio tag with ID "beep" on the page.: expected null to not equal null
   AssertionError: There is no audio tag with ID "beep" on the page.: expected null to not equal null
   at Proxy.c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:549:1881)
   at Proxy.l (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:431:130)
   at Function.n.isNotNull (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:574:1549)
   at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:191198)
   at u (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:110520)
   at Generator.\_invoke (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:110308)
   at Generator.e.<computed> [as next](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:110942)
   at r (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1055)
   at i (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1265)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1324
   at new Promise (<anonymous>)
   at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1206)
   at c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35224)
   at i.p.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35154)
   at T.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41723)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:42605
   at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41019)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41088
   at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40141)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40906
   at f (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:593:1377)
2. The audio element with id="beep" must be 1 second or longer.
   There is no audio tag with ID "beep" on the page.: expected null to not equal null
   AssertionError: There is no audio tag with ID "beep" on the page.: expected null to not equal null
   at Proxy.c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:549:1881)
   at Proxy.l (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:431:130)
   at Function.n.isNotNull (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:574:1549)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:191780
   at u (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:110520)
   at Generator.\_invoke (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:110308)
   at Generator.e.<computed> [as next](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:110942)
   at r (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1055)
   at i (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1265)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1324
   at new Promise (<anonymous>)
   at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:1:1206)
   at c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35224)
   at i.p.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35154)
   at T.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41723)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:42605
   at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41019)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41088
   at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40141)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40906
   at f (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:593:1377)
3. The audio element with id of "beep" must stop playing and be rewound to the beginning when the element with the id of "reset" is clicked.
   Cannot read property 'play' of null
   TypeError: Cannot read property 'play' of null
   at a.<anonymous> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:657:192402)
   at c (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35224)
   at i.p.run (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:35154)
   at T.runTest (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41723)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:42605
   at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41019)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:41088
   at o (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40141)
   at https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:598:40906
   at f (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:593:1377)
