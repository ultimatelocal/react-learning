import React from 'react';
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card
} from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

async function signOut() {
  return await Auth.signOut().then((val) => console.log(val));
}
function Authentication() {
  return (
    <View className="Authentication">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(Authentication);
