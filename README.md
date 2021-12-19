# Client-side
# Event's Web Application

## User Story:
* User sign up with this information [ email, full name, password, phone number]
* User can sign up with Google.
* User sign in with [ email, password ]
* User can reset his password by sending email with code/link to him.

* There is two type of events: 
  * **Events**
    In public event case the creator can choose selling tickets or give it for free. Also the guest can send donation to event creator like a supporting for a charity events.
   * **Private Event** 
    Event creator send a ticket dirctiry to guest email.

* User can create his event page by filling this informaion:
  * Title
  * Short discription 
  * Long discription (not required)
  * Photos like : logo, event photo.
  * choose color of his page. (not required)
  * Location
  * Contact number
  * Begging and end date 
  * Begging and end time
  * Choose type of event.
  * User can edit or delete event page.
* After user done of create his event page he should send an order for admin to confirme his event. (user can delete event order)

* **After Admin confirmation** :
  * **In case: event type was a private**
    * User can set guest emails and send invitation email to them.

  * **In case: event type was a special**
    * User can see public event page without have an account.
    * User can buy a ticket only when he register and logged in.
    * After user decide to buy a ticket and pay for it he will recive email ticket.

* The invitation email contains: 
  * QR ticket (expired by the end of event)
  * Invation letter
  * Event Date and time
  * Event page like that was created by event creator.(When guest open link he will be able to see event page)

* Creator event user will have link for read/scan QR ticket.(This link used at door of event location to let guset enter if it is verfied)
* Creator event user have table for guest that contains two rows: "email" filled by guest email, and "came" filled by yes or no.
* In admin dashboard there is bar chart showing analisis of response rate in each event in application. Values computed referring to data achieved from event's geust.
* Admin can delete any event in any time, and block and unblock user account.



  ----
