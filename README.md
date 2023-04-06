# Wanderlustic

Wanderlustic is the ultimate travel booking website, providing users with everything they need to plan and book their dream vacation. With a user-friendly interface, personalized recommendations, Wanderlustic makes it easy to have the perfect travel experience.

## Demo

https://wanderlustic.vercel.app/

## Tech Stack

**Client:** React, Chakra-UI

**Server:** Node, Express, Mongoose, MongoDB

## Features

- Light/dark mode toggle
- Fullscreen mode
- Cross platform

## Run Locally

Clone the project

```bash
  git clone https://github.com/pratikderepatil/wanderlustic
```

Go to the project directory

```bash
  cd frontend
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference

#### New booking

```http
  POST /user/confirmBooking/
```

| Parameter            | Type     | Description   |
| :------------------- | :------- | :------------ |
| `fullname`           | `string` | **Required**. |
| `email`              | `email`  | **Required**. |
| `destination`        | `string` | **Required**. |
| `numberOfTravellers` | `number` | **Required**. |
| `budget`             | `number` | **Required**. |

#### Get booking details by id

```http
  POST /user/getBookingDetails
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of booking to fetch |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL="https://wanderlustic.onrender.com/user/"`

## Test Cases

### Frontend

| Test Case ID | Test Case Description             | Test Steps                                                                                            | Expected Result                                                                    |
| ------------ | --------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1            | Form Submission with Valid Data   | 1. Enter a valid name in the "Name" field.                                                            | Form data is successfully submitted and the user is redirected to the second page. |
|              |                                   | 2. Enter a valid email address in the "Email address" field.                                          |                                                                                    |
|              |                                   | 3. Select a valid option from the "Select Destination" dropdown.                                |                                                                                    |
|              |                                   | 4. Enter a valid number in the "No. of travellers" field.                                             |                                                                                    |
|              |                                   | 5. Enter a valid budget per person in the "Budget Per Person" field.                                  |                                                                                    |
|              |                                   | 6. Click on the "Submit" button.                                                                      |                                                                                    |
| 2            | Form Submission with Invalid Data | 1. Enter an invalid name in the "Name" field (e.g. special characters, numbers only).                 | Submit button is disabled           |
|              |                                   | 2. Enter an invalid email address in the "Email address" field (e.g. missing '@' symbol).             |                                                                                    |
|              |                                   | 3. Select an invalid option from the "Select Destination" dropdown.                             |                                                                                    |
|              |                                   | 4. Enter an invalid number in the "No. of travellers" field (e.g. negative number, decimal value).    |                                                                                    |
|              |                                   | 5. Enter an invalid budget per person in the "Budget Per Person" field (e.g. non-numeric characters). |                                                                                    |
|              |                                   | 6. Click on the "Submit" button.                                                                      |                                                                                    |

### Backend

| Test Case ID | Test Case Description | Test Steps                                                           | Expected Result                                                              |
| ------------ | --------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1            | Store Form Data       | 1. Submit a valid form with valid data.                              | The form data is successfully stored in the database.                        |
|              |                       | 2. Verify that the form data is successfully stored in the database. |                                                                              |
| 2            | Retrieve Form Data    | 1. Submit multiple forms with valid data.                            | All the previously submitted form data is retrieved and displayed correctly. |
|              |                       | 2. Call the second endpoint to retrieve existing form submissions.   |                                                                              |

## Screenshots

![Screenshot (854)](https://user-images.githubusercontent.com/103197193/230181153-77f31e14-5c76-43f2-bf90-5d4d8c6218f8.png)
![Screenshot (855)](https://user-images.githubusercontent.com/103197193/230181155-50c3253c-d089-436a-8aee-c49594d29b3f.png)
![Screenshot (856)](https://user-images.githubusercontent.com/103197193/230181133-4293dc5c-20e1-4779-b8cc-586a893838ed.png)
![Screenshot (857)](https://user-images.githubusercontent.com/103197193/230181148-d1da9e3d-3b4d-4bf2-a635-4027a5574edd.png)
![Screenshot (858)](https://user-images.githubusercontent.com/103197193/230181152-53d49ff9-de3e-4c0a-9a39-9b6900b80441.png)

## Authors

- [@pratikderepatil](https://www.github.com/pratikderepatil)
