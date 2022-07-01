const SENTENCES = [
    "The quick brown fox jumped over the fence.",
    "It's been over a fence, I'm starting to think that tractor is never coming back.",
    "What do you believe to be the answer to my problems?",
]

var app = new Vue({
    el: "#app",
    data:{
        randomSentence: "",
        userSentence: "",
        totalTime: 0
    },
    methods:{
        startRace: function () {
        },
        getRandomSentence: function () {
            let sentenceIndex = Math.floor(Math.random() * 3);
            this.randomSentence = SENTENCES[sentenceIndex];
        },
        calculateTotalTime: function () {
            let currentTime = new Date();
            console.log(currentTime);
            let currentSeconds = currentTime.getTime()/1000
            this.totalTime = currentSeconds - this.startTime.getTime()/1000
        },
        resetTest: function () {
        },
        resetWithNewSentence: function () {
        }
    },
    computed: {
        // this function runs whenever the sentence the user is typing changes
        // use it like a variable (v-if="finishedTyping")
        finishedTyping: function () {
            // you probably wanna use your variable here in place of these awful ones
            if (this.randomSentence == this.userSentence) {
                this.calculateTotalTime();
                return true;
            } else {
                return false;
            }
        }
    },
    created: function () {
        this.getRandomSentence()
    }
});

/*
extra cool additions:
 - Keep a high score that stays between attempts
 - Let the user pick the sentence that they will be typing
 - Show a timer on the screen as they are typing
*/