// import Head from 'next/head'

import { Heading, Grid, Flex, Button, Text } from '@chakra-ui/core';
import Divider from '../components/Divider';
import Input from '../components/Input';
import Link from '../components/Link';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="logo"
        flexDir="column"
        alignItems="flex-start"
      >
        <img src="/rocketseat.svg" alt="Rocketseat"/>
        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={12}
      >
        <Input
          placeholder="E-mail"
        />

        <Input
          marginTop={2}
          placeholder="Senha"
        />

        <Link
          title="Esqueci minha senha"
          alignSelf="flex-start"
          marginTop={2}
        />

        <Button
          backgroundColor="purple.500"
          marginTop={6}
          borderRadius="sm"
          height="50px"
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link title="Registre-se" />
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'purple.500' }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  )
}
