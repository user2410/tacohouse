import { createStackNavigator } from "@react-navigation/stack";
import CreateListingDetailsScreen from "@screens/listing-app/manage-listings/add-listing/create-listing-details/listing-details.screen";
import QuickCreatePropertyScreen from "@screens/listing-app/manage-listings/add-listing/quick-create-property/quick-create-property.screen";
import SelectPropertyScreen from "@screens/listing-app/manage-listings/add-listing/select-property.screen";

export type CreateLisitingNavigatorParams = {
  SelectProperty: undefined;
  QuickCreateProperty: undefined;
  CreateListingDetails: undefined;
  // PropertyLocation: undefined;
  // Pricing: undefined;
  // Media: undefined;
  // Policies: undefined;
};

const Stack = createStackNavigator<CreateLisitingNavigatorParams>();

export default function CreateListingNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerTitle: 'Create listing',
      headerLeft: () => null,
    }}>
      <Stack.Screen 
        name="SelectProperty" 
        component={SelectPropertyScreen}
      />
      <Stack.Screen 
        name="QuickCreateProperty" 
        component={QuickCreatePropertyScreen}
        />
      <Stack.Screen 
        name="CreateListingDetails"
        component={CreateListingDetailsScreen}
        />
      {/* <Stack.Screen name="PropertyDetails" component={}/>
      <Stack.Screen name="PropertyLocation" component={}/>
      <Stack.Screen name="Pricing" component={}/>
      <Stack.Screen name="Media" component={}/>
      <Stack.Screen name="Policies" component={}/> */}
    </Stack.Navigator>
  );
}