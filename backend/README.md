# Wanderlustic

Wanderlustic is the ultimate travel booking website, providing users with everything they need to plan and book their dream vacation. With a user-friendly interface, personalized recommendations, Wanderlustic makes it easy to have the perfect travel experience.

## Demo

Frontend Deployed link: `https://wanderlustic.vercel.app/`

Backend Deployed link: `https://wanderlustic.onrender.com/`

## Tech Stack

**Client:** React, Chakra-UI

**Server:** Node, Express, Mongoose, MongoDB

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

`DB_URL="mongodb+srv://wanderlustic:wanderlustic@cluster0.3cetmid.mongodb.net/"`

`PORT=8080`

## Test Cases

| Test Case ID | Test Case Description | Test Steps                                                           | Expected Result                                                              |
| ------------ | --------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1            | Store Form Data       | 1. Submit a valid form with valid data.                              | The form data is successfully stored in the database.                        |
|              |                       | 2. Verify that the form data is successfully stored in the database. |                                                                              |
| 2            | Retrieve Form Data    | 1. Submit multiple forms with valid data.                            | All the previously submitted form data is retrieved and displayed correctly. |
|              |                       | 2. Call the second endpoint to retrieve existing form submissions.   |                                                                              |

## Screenshots

![Screenshot (859)](https://user-images.githubusercontent.com/103197193/230184885-385d2ad8-b84f-4f33-9f4c-191548904640.png)
![Screenshot (860)](https://user-images.githubusercontent.com/103197193/230184899-fe228c38-c061-42d6-afa1-6d69674662fd.png)

## Authors

- [@pratikderepatil](https://www.github.com/pratikderepatil)
