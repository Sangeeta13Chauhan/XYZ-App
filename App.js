import * as React from 'react';
import { View, Text, Button ,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
      <TouchableOpacity>
      <Text style={{color:'purple',marginTop:50,
     fontWeight:'300',
     fontSize:40,width:200,
     height:100,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",padding: 20}}>Members</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={{color:'purple',marginTop:100,
     fontWeight:'300',
     fontSize:40,width:200,
     height:100,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",padding: 20}}
           >
           <Text style={{color:'purple',
     fontWeight:'300',
     fontSize:35,width:200,
     height:100,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",padding: 20}}>Volunteers</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={{color:'purple',
     fontWeight:'200',
     fontSize:20}}
           >
           <Text style={{color:'purple',marginTop:100,
     fontWeight:'300',
     fontSize:40,width:200,
     height:100,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",padding: 20}}>Seniors</Text>
         </TouchableOpacity>

           <Text style={{
     flex:1,
     backgroundColor:'orange',
     alignItems: 'center',
     justifyContent: 'center'
   }}></Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Members() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Payment Options

            Cheque:
            In favour of XYZ FOUNDATION
            
            Bank transfer:
            Account Name: XYZ FOUNDATION
            Bank Name: KOTAK MAHINDRA BANK
            Account No: 6911934878
            IFSC Code: KKBK0000647
            Branch: Mumbai – Churchgate
            Account Type: Savings
            
            Please give your Transaction details to the volunteer after you have made the payment.</Text>
    </View>
  );
}

function Volunteers() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Volunteers Registration
            </Text>
    </View>
  );
}

function ContactUs() {
 
            return(
            <View>
                
              <Image
               // source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>Contact Us</Text>
            
            <View>
            <Text >

            <input type="text" value="Your Name"/>
            <br/>
            <br/>
            <input type="text" value="Your Email"/>
            <br/>
            <br/>
            <input type="text" value="Your Message"/>
            <br/>
            <br/>
            <button onClick="send()">Send</button>

            function send(){
            alert("Your message has been received by XYZ Foundation \n One of our volunteers will contact you as soon as possible.")
            }

            Contact:
            XYZ Foundation, Thakker Building, 1st floor, 
            Champsi Bhimji Road, Mazgaon, Mumbai, 
            Maharashtra, India 400010

            +919820683398
            +919821349283

            info@xyzfoundation.net
            </Text>
            </View>
            </View>
        )
    }


function Seniors() {
  return (
    <View>
            <Text >

            The XYZ Foundation has been 
            working since 2014 with children of the community
            between the ages of 5 and 15 years.
            We are now creating a new group – XYZ Seniors
            which aims at creating a fun, interactive and a creative
            outlet for youth over the age of 15 years.
            This group will create a sense of belonging and pride 
            within the community and also provide extra curricular 
            activities with social awareness, personality development
            and life skills. There will be fun events, sports, games and 
            other activities that are of the youth, by the youth and for
            the youth.
            </Text>
            </View>
  );
}

function Donors() {
  return (
    <View>
            <Text >

            Dear Sir / Madam,

Xtremely Young Zoroastrians (XYZ) is an organisation 
aimed at promoting togetherness and camaraderie within 
the youngsters of the Zoroastrian Community. XYZ aspires
 to mould the children between the ages of 5 and 15 years
 to become better individuals and inculcate the Zoroastrian 
values through fellowship and service activities.

We at Xtremely Young Zoroastrians would like to thank you
so much for showing interest in our activities. XYZ 
Foundation is a registered trust with the Charity 
Commissioner of Greater Mumbai with the Registered Trust
No. E30970 (M) from 16th March 2015 with
 PAN No. AAATX0125H and TAN No. MUMX00599E.
 
XYZ Foundation has received the 80-G Certificate from the
 Office of the Commissioner of Income Tax. From 29th July
 2016 onwards, all donations received by XYZ Foundation
will also benefit the donor with 50% deduction in their
Income Tax.

The purpose of XYZ is to build a strong sense of community
belonging and pride in the Zoroastrian children. 
The religious practices are an important part of our culture
and we want our children to start adhering to them from an
early age.

Since leadership skills like goal setting, decision making, 
team work, people skills, money management and ethics
are also very important attributes, they too will be inculcated
 through various activities of XYZ through our Sunday
sessions which take place in 8 centres all over the city of 
Mumbai, namely – Colaba, Tardeo, Byculla, Parel, Dadar,
Avabai Petit School Boarders, Bandra and Andheri.


XYZ Foundation has carried out numerous events for the 
children of our community like XYZ Games,
XYZs Got Talent, XYZ Summer Camp, 
XYZ LAFA – Literary Arts & Fine Arts, XYZ Indoor Mania, 
XYZ Xtravaganza and XYZ Leadership Camp.

To meet our objectives, we solicit the support of each and 
every individual and organisation that shares our vision for
a brighter future. We hope that you help to catapult our 
effort and enthusiasm to its zenith.

XYZ currently has 500 members, ie. children in the age 
group of 5-15 years in our 8 centres. 

We thus request you, to give us some time to meet, so that 
we can explain our initiative to you personally and/or 
indicate in which way you can help to further XYZ’s 
objectives. Your support can be either in cash or kind and
will be invaluable to help develop our cause.

We take this opportunity to thank you in anticipation, in
helping us realise our vision, which will be completely in the
interest of our Xtremely Young Zoroastrians.

Looking forward to hearing from you soon. 

With warm regards,
Hoshaang Gotla

Founder, XYZ

<img src="C:\Users\yazdk\Documents\XYZ\XYZ Application\XYZ_application\assets\Donor chart.png"/>

Donations of any amount are accepted. Cheques must be
drawn in favour of XYZ Foundation and could we request 
you to please provide your PAN Number at the back of 
cheque.
            </Text>
            </View>
  );
}

function Themes() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add Themes
            </Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Donors" component={Donors} />
      <Drawer.Screen name="Members" component={Members} />
       <Drawer.Screen name="Volunteers" component={Volunteers} />
       <Drawer.Screen name="Seniors" component={Seniors} />
       <Drawer.Screen name="ContactUs" component={ContactUs} />
       <Drawer.Screen name="Themes" component={Themes} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
