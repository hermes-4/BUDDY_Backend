# Buddy Backend

Welcome to the Student Companion App Backend! This the Backend of the application designed to assist students, administrators and in managing various aspects of student information and communication and schedules

## Student Routes

### Register
- **Endpoint:** `/api/register`
- **Description:** This route is used to register students.

### Login
- **Endpoint:** `/api/login`
- **Description:** This route is used to log in as a registered student.

### Courses
- **Endpoint:** `/api/courses`
- **Description:** This route is used to record courses for the semester.

## Admin Routes

### All Students
- **Endpoint:** `/admin/allstudents`
- **Description:** This endpoint is used to view the details of all registered students.

## Sudo Routes

### Sudo
- **Endpoint:** `/sudo/sudo`
- **Description:** This endpoint can be used to register a sudo user or request information about all sudo users.

## Update Sender Routes

### Create Message Document
- **Endpoint:** `/update/updateS`
- **Description:** This endpoint is used to create a message document for the sender of a message or request the messages sent by a particular user.

### Delete or Update Message Document
- **Endpoint:** `/update/updateS/:id`
- **Description:** This endpoint is used to delete a message document for a particular user or update the records of messages sent for a specific user.

### Update Records for All Users
- **Endpoint:** `/update/updateSs`
- **Description:** This route is used to update the record of messages sent for all users.

## Update Receiver Routes

### Create Message Document
- **Endpoint:** `/update/updateR`
- **Description:** This route is used to create a message document for the receiver of messages or request information about all messages received.

---

Feel free to explore and utilize these routes to enhance your experience with the Student Companion App! If you have any questions or issues, please refer to the documentation or contact our support team.