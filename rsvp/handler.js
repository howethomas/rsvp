"use strict"

module.exports = (context, callback) => {
  var resp = { }

  var data = JSON.parse(context)
  var customerResponse = data.msg.txt.toLowerCase().trim() 
  if (customerResponse.includes("rsvp") && data.msg.direction === "ingress") {
    resp = {
      whispers: [
        {
          txt: "Recording RSVP"
        }
      ],
      messages: [
        {
          txt: "We are excited and look forward to seeing you on the 24th! Let us know if you have any other questions that we may answer at this time."
        }
      ],
      customerTags: [
        "response:rsvp"
      ],
      commands: {
        end_session: true
      }
    }
  }
  callback(undefined, resp);
}
