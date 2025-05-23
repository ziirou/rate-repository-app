import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  // Get the access token for the storage
  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    return token ? JSON.parse(token) : '';
  }

  // Add the access token to the storage
  async setAccessToken(accessToken) {
    const newToken = JSON.stringify(accessToken);
    await AsyncStorage.setItem(`${this.namespace}:token`, newToken);
  }

  // Remove the access token from the storage
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
