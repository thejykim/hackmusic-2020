function createNotification(type, message, href) {
    if (href == null) {
        notificationCount++;

        if (notificationCount > 1) {
            notificationCount--;
            clearInterval(dismissInterval);

            $("#createDialog").fadeOut("fast", function() {
                createDialog.innerHTML = ``;

                dismissCount = 4;

                createDialog.innerHTML = `
                <div class="notification ${type}" style="border: 5px solid hsl(0, 0%, 86%)">
                    <div class="columns">
                        <div class="column is-four-fifths">
                            <p>${message}</p>
                        </div>
                        <div class="column">
                            <div class="has-text-right is-size-7">
                                <span id="dismissCount">(Dismissing in 5 seconds)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br>`;

                $("#createDialog").fadeIn("fast", function() {
                    dismissInterval = setInterval(updateDismissCount, 1000);
                });
            });
        } else {
            dismissCount = 4;

            createDialog.innerHTML = `
            <div class="notification ${type}" style="border: 5px solid hsl(0, 0%, 86%)">
                <div class="columns">
                    <div class="column is-four-fifths">
                        <p>${message}</p>
                    </div>
                    <div class="column">
                        <div class="has-text-right is-size-7">
                            <span id="dismissCount">(Dismissing in 5 seconds)</span>
                        </div>
                    </div>
                </div>
            </div>
            <br>`;

            $("#createDialog").fadeIn("slow", function() {
                dismissInterval = setInterval(updateDismissCount, 1000);
            });
        }
    } else {
        notificationCount = 1;

        clearInterval(dismissInterval);

        createDialog.innerHTML = `
            <div class="notification ${type}" style="border: 5px solid hsl(0, 0%, 86%)">
                <div class="columns">
                    <div class="column is-11">
                        <p><a style="text-decoration: none;" href='${href}'>${message}</a></p>
                    </div>
                    <div class="column" style="text-align: right">
                        <span class="icon is-small" onclick='dismissNotification()' style="cursor: pointer;">
                            <i class="fas fa-times"></i>
                        </span>
                    </div>
                </div>
            </div>
        <br>`;

        $("#createDialog").fadeIn("slow", function() {});
    }
}

function updateDismissCount() {
    if (dismissCount > 1) {
        $("#dismissCount").text("(Dismissing in " + dismissCount + " seconds)");
    } else if (dismissCount == 1) {
        $("#dismissCount").text("(Dismissing in " + dismissCount + " second)");
    } else {
        $("#dismissCount").text("(Dismissing in " + dismissCount + " seconds)");
        clearInterval(dismissInterval);
        dismissNotification();
    }

    dismissCount--;
}

function dismissNotification() {
    notificationCount--;

    if (notificationCount == 0) {
        $("#createDialog").fadeOut("slow", function() {
            createDialog.innerHTML = ``;
        });
    }
}
