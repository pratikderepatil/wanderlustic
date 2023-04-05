import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const initState = {
  fullname: '',
  email: '',
  destination: '',
  numberOfTravellers: 1,
  budget: 250,
};
const Registration = () => {
  const [form, setForm] = useState(initState);
  const handleInput = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}confirmBooking`,
        { ...form },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(response => {
        localStorage.setItem('id', response.data);
        toast({
          title: 'Congratulations! Booking confirmed',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        navigate('/booking-details');
      })
      .catch(error => {
        toast({
          title: 'Internal server error!',
          description: 'Please try after sometime.',
          position: 'top',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        console.log(error);
      });
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Enter fullname</FormLabel>
          <Input
            type="text"
            name="fullname"
            value={form.name}
            onChange={handleInput}
            placeholder="Enter name"
          />
          <FormLabel>Enter email</FormLabel>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInput}
            placeholder="Enter email"
          />
          <FormLabel>Select destination</FormLabel>
          <Select
            placeholder="Select destination"
            name="destination"
            onChange={handleInput}
          >
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
          </Select>

          <FormLabel>Number of travellers</FormLabel>
          <HStack w="full" justifyContent={'space-between'}>
            <Button
              isDisabled={form.numberOfTravellers === 20}
              onClick={() => {
                setForm({
                  ...form,
                  numberOfTravellers: form.numberOfTravellers + 1,
                });
              }}
            >
              +
            </Button>
            <Text>{form.numberOfTravellers}</Text>
            <Button
              isDisabled={form.numberOfTravellers === 1}
              onClick={() => {
                setForm({
                  ...form,
                  numberOfTravellers: form.numberOfTravellers - 1,
                });
              }}
            >
              -
            </Button>
          </HStack>
          <FormLabel>Budget / person</FormLabel>
          <Box pt={6} pb={2}>
            <Slider
              min={100}
              max={999}
              step={10}
              defaultValue={250}
              colorScheme="whatsapp"
              onChange={val => setForm({ ...form, budget: val })}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderMark
                value={form.budget}
                textAlign="center"
                bg="whatsapp.300"
                color="white"
                mt="-10"
                ml="-5"
                w="12"
                borderRadius={5}
              >
                <Text fontSize={'sm'}>${form.budget}</Text>
              </SliderMark>

              <SliderThumb />
            </Slider>
          </Box>
          <Button
            isDisabled={
              form.name === '' || form.email === '' || form.destination === ''
            }
            colorScheme="whatsapp"
            type="submit"
          >
            Confirm
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Registration;
