import React, { FunctionComponent } from "react";
import { InvoiceItemProps } from "./styles";
import { Alert, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import RegularText from "@components/Texts/RegularText";
import BigText from "@components/Texts/BigText";
import SmallText from "@components/Texts/SmallText copy";

const invoiceStatusColor = {
    paid: {
        text: 'Paid',
        backgroundColor: '#98ed7d',
        textColor: '#000',
    },
    overdue: {
        text: 'Overdue',
        backgroundColor: '#c00d0d',
        textColor: '#fff',
    },
    pending: {
        text: 'Pending',
        backgroundColor: '#eeec62',
        textColor: '#000',
    },
}

interface StatusBoxProps {
    text: string,
    backgroundColor: string,
    textColor: string,
}

export const StatusBox:FunctionComponent<StatusBoxProps> = (props) => (
    <RegularText textStyles={{
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        borderRadius: 4,
    }}>
        {props.text}
    </RegularText>
);

export default function InvoiceItem(props: InvoiceItemProps): React.ReactElement {
    const {dueDate} = props;

    let today = new Date();
    // Full date
    let dueDateString = `${dueDate}/${today.getMonth() + 1}`

    let endDate = new Date(today.getFullYear(), today.getMonth(), dueDate);
    
    // Add more + for not have typescript check
    const diffInMs = Math.abs(+endDate - +today);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));


    return (
        <View style={{
            ...styles.containerInline,
            justifyContent: 'space-between',
        }}>
            <View style={{
                ...styles.containerInline,
                maxWidth: '50%',
            }}>
                <Avatar.Image size={45} source={require('@assets/images/avatar.jpg')} />
                <View>
                    <RegularText textStyles={{fontSize: 17 }}>{props.tenantName}</RegularText>
                    <RegularText textStyles={{ marginBottom: 5, fontSize: 17 }}>{props.room}</RegularText>
                    <StatusBox {...invoiceStatusColor[props.status]} />
                </View>
            </View>
            <View>
                <BigText textStyles={{fontSize: 20}}>{props.balanceDue.toLocaleString()} VND</BigText>
                <RegularText textStyles={{ fontSize: 16}}>Due date: {dueDateString}</RegularText>
                <SmallText>Left {diffInDays}</SmallText>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    containerInline: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
}); 

/**
 * Take the diff date from today to  x day of same month.
 */
function dateDiff(dateOfMonth : number): number {        
    let today = new Date();
    let endDate = new Date(`${today.getMonth() + 1}/${dateOfMonth}/${today.getFullYear()}`);
    
    // Add more + for not have typescript check
    const diffInMs = Math.abs(+endDate - +today);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
}