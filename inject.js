/**
 * Created by makito on 2017/9/5.
 */


var QWQ = "<span> qwq</span>";

var lastExecutionTimestamp = 0;
var scheduled = false;

function qwqize() {
    var elements_tweet_text = document.getElementsByClassName("tweet-text");

    for (var i = 0; i < elements_tweet_text.length; i++) {
        var el = elements_tweet_text[i];
        if (el.getAttribute("qwq") === "true"
            || el.innerHTML.endsWith(QWQ)) {
            console.log(">>>>>>>> SKIPPED");
            continue;
        }
        el.innerHTML += QWQ;
        el.setAttribute("qwq", "true");
        console.log("QWQIZED");
    }
    scheduled = false;
}

function schedule() {
    if (scheduled)return;
    scheduled = true;
    setTimeout(qwqize, 2000);
}

console.log("INITIAL");

document.getElementsByClassName("stream")[0].addEventListener("DOMNodeInserted", schedule, false);
document.getElementById("global-new-tweet-button").innerHTML = '<span class="text">卖萌</span>';

qwqize();
