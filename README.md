# Client-side
# Event's Web Application
### ![Screen Shot](https://github.com/MP-Project-Suha/Client-side/blob/main/images/preview.png)

### ![Screen Shot](https://github.com/MP-Project-Suha/Client-side/blob/main/images/Tickets.png)


## User Story:
* User sign up with this information [ email, full name, password, phone number]
* User can sign up with Google.
* User sign in with [ email, password ]
* User can reset his password by sending email with code/link to him.

* There is two type of events: 
  * **Events**
    In public event case the creator can choose selling tickets or give it for free. Also the guest can send donation to event creator like a supporting for a charity events.
   * **Private Event** 
    Event creator send a ticket directory to guest email.

* User can create his event page by filling this information:
  * Title
  * Short description 
  * Long description (not required)
  * Photos like : logo, event photo.
  * choose color of his page. (not required)
  * Location
  * Contact number
  * Begging and end date 
  * Begging and end time
  * Choose type of event.
  * User can edit or delete event page.
* After user done of create his event page he should send an order for admin to confirm his event. (user can delete event order)

* **After Admin confirmation** :
  * **In case: event type was a private**
    * User can set guest emails and send invitation email to them.

  * **In case: event type was a special**
    * User can see public event page without have an account.
    * User can buy a ticket only when he register and logged in.
    * After user decide to buy a ticket and pay for it he will receive email ticket.

* The invitation email contains: 
  * QR ticket (expired by the end of event)
  * Invitation letter
  * Event Date and time
  * Event page like that was created by event creator.(When guest open link he will be able to see event page)

* Creator event user will have link for read/scan QR ticket.(This link used at door of event location to let guest enter if it is verified)
* Creator event user have table for guest that contains two rows: "email" filled by guest email, and "came" filled by yes or no.
* In admin dashboard there is bar chart showing analysis of response rate in each event in application. Values computed referring to data achieved from event's guest.
* Admin can delete any event in any time, and block and unblock user account.

# UML Diagram:

## ![UML](https://github.com/MP-Project-Suha/Client-side/blob/main/images/UML.png)

  ----
  # Routers :

| COMPONENT     | URL          | Permissions | Behavior |
| ------------- | ------------ | ----------- | -------- |
| Login       |  /login | public | Login user to his account |
| Register    | /register | public |  Register new account page   |
| ForgetPassword | /forgetPassword/:_id/:token  | public | Form to enter new password |
| ResetPassword | /resetPassword | public | Form for enter user email to send reset password link to him |
| MyEvents |  /myEvents | private - user |   Show all user events |
| MySingleEvent | /mySingleEvent | private - user | Event Description page |
| Landing  | / |  public | Home page for the website |
| Events |  /events | public | Show all events|
| Event  | /event | public | Show public event |
| EditEvent | /editEvent | private - user |  update Event |
| DeleteEvent | /deleteEvent | private - user | delete event for user |
| AddEvent  | /addEvent | private -user | add event |
| Vote| /vote | private | vote for the event |
| GuestList | /guestList | private - user  | Show all user guests |
| MyTickets | /myTickets | private - user | Show all user tickets |
| MyTickets | /myTicket | private - user | Show user ticket |
| AddTicket  | /addTicket| private -user | add ticket |
| Profile | /profile | private -user | show user profile and update it |

---
## Wire Frame:
**Public Pages**
![PublicPages](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C078ceb35b095466e83c21d663f9cd3e3/projects/MSn8XvILgnb/pages/74e1249c4cb34521838fb4178856afbd/image/74e1249c4cb34521838fb4178856afbd.png?1639937121663)

**Event Pages**
![Event Pages](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C078ceb35b095466e83c21d663f9cd3e3/projects/MSn8XvILgnb/pages/D55f21dce610c3fcdcea3de382c7cfbf4/image/D55f21dce610c3fcdcea3de382c7cfbf4.png?1639938024004)


## Links:
* [Trello](https://trello.com/b/xefVOZOx/master-piece-project)
* [Deploy](http://eventi-webapp.herokuapp.com)
* [Server-Side](https://github.com/MP-Project-Suha/Server-side)
* [Slides]
