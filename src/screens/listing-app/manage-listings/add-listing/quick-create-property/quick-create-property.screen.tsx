import CreatePropertyForm, { CreatePropertyFormData } from "@components/form/create-property/create-property";
import { CreateLisitingNavigatorParams } from "@navigation/listing-app/create-listing.navigator";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { bindActionCreators } from "@reduxjs/toolkit";
import { saveDraftProperty } from "@store/create-listing/action";
import { CreateListingState } from "@store/create-listing/state";
import { AppState } from "@store/store";
import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, SafeAreaView, Text } from "react-native";
import { connect } from "react-redux";
import CreateListingLayout from "../layout";
import NavigationButton from "../navigation-button";

const ICON_SIZE = 24;

function Screen({createListing, saveDraftProperty}: {
  createListing: CreateListingState;
  saveDraftProperty: Function;
}) {
  const navigation = useNavigation<StackNavigationProp<CreateLisitingNavigatorParams, 'QuickCreateProperty'>>();
  const {
    control, register, setValue, reset, handleSubmit,
    formState: { errors },
  } = useForm<CreatePropertyFormData>({
    defaultValues: {
      address: '',
      nFloors: 1,
      nBathRooms: 0,
      nBedRooms: 1,
      nKitchens: 0,
    }
  });

  React.useEffect(() => {
    console.log(createListing);
  }, [createListing]);
  
  const onSubmit = async (data: CreatePropertyFormData) => {
    console.log('hello there', data);
    saveDraftProperty(data);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CreateListingLayout
        title="Property details"
        leftNavBtn={<Pressable onPress={() => navigation.replace('SelectProperty')}><Text>Select available property</Text></Pressable>}
        rightNavBtn={<NavigationButton onPress={() => {
          handleSubmit(onSubmit)();
          navigation.navigate('CreateListingDetails');
        }} next={true} />}
      >
        <CreatePropertyForm control={control} setValue={setValue}/>
      </CreateListingLayout>
    </SafeAreaView>
  )
}

const mapStateToProps = (store: AppState) => ({
  createListing: store.createListing,
});

const mapDispatchToProps = (dispatch: any) => 
  bindActionCreators(
    {
      saveDraftProperty: saveDraftProperty,
    },
    dispatch
  );

const QuickCreatePropertyScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);
export default QuickCreatePropertyScreen;