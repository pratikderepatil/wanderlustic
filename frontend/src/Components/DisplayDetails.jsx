import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Tr,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayDetails = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const id = localStorage.getItem('id');
    console.log(id);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}getBookingDetails`,
        { id: id },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (loading) {
    return <Heading>Loading...</Heading>;
  }
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Booking Details</Heading>
      </CardHeader>

      <CardBody>
        <TableContainer>
          <Table
            variant="striped"
            colorScheme="whatsapp"
            fontSize={['sm', 'lg']}
            fontWeight={'semibold'}
          >
            <Tbody>
              <Tr>
                <Td>Name </Td>
                <Td>{data.fullname}</Td>
              </Tr>
              <Tr>
                <Td>Email</Td>
                <Td>{data.email}</Td>
              </Tr>
              <Tr>
                <Td>Destination </Td>
                <Td>{data.destination}</Td>
              </Tr>
              <Tr>
                <Td>No. of travellers </Td>
                <Td>{data.numberOfTravellers}</Td>
              </Tr>
              <Tr>
                <Td>Budget / Person</Td>
                <Td>${data.budget}</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Td>Grand Total </Td>
                <Td>${data.numberOfTravellers * data.budget}</Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </CardBody>
      <CardFooter justify="center">
        <Link to="/">
          <Button colorScheme="messenger">Check for more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DisplayDetails;
