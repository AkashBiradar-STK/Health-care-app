# HealthPal React Native / Expo Project – Simple Notes

## 1. What we built

This project is a **frontend mobile application** built with:

- React Native
- Expo
- Expo Router
- TypeScript (`.tsx`)
- React hooks such as `useState` and `useEffect`
- React Native components such as `View`, `Text`, `Image`, `Pressable`, `TextInput`
- Reusable components
- Global color variables
- Keyboard-aware scrolling
- Basic frontend navigation between screens

At this stage, there is **no real backend or authentication system**. Buttons mainly demonstrate the frontend flow.

---

# 2. Important project structure

Our important files now look roughly like this:

```text
my-app/
│
├── app/
│   ├── _layout.tsx
│   ├── onboarding.tsx
│   ├── signup.tsx
│   ├── signin.tsx
│   ├── profile.tsx
│   └── congratulations.tsx
│
├── components/
│   └── reusable/
│       ├── KeyboardAwareScrollView.tsx
│       ├── CustomButton.tsx
│       ├── CustomInput.tsx
│       ├── FormInput.tsx
│       └── SocialButton.tsx
│
├── constants/
│   └── theme.ts
│
├── assets/
│   └── images/
│       └── onboarding/
│           ├── logo.png
│           ├── doctor-1.png
│           ├── doctor-2.png
│           ├── doctor-3.png
│           └── doctor-4.png
│
└── package.json
```

There are other Expo/project files too, but these are the main files we worked with.

---

# 3. `app` folder – Screens

The `app` folder contains the **screens/routes** of the application.

With Expo Router, the file name becomes the route.

For example:

```text
app/signup.tsx
```

becomes:

```text
/signup
```

Similarly:

```text
app/signin.tsx       → /signin
app/profile.tsx      → /profile
app/onboarding.tsx   → /onboarding
app/congratulations.tsx → /congratulations
```

---

# 4. `_layout.tsx`

File:

```text
app/_layout.tsx
```

This is the main navigation/layout configuration.

We use:

```tsx
import { Stack } from 'expo-router';
```

`Stack` controls the navigation stack.

We registered our screens:

```tsx
<Stack.Screen
  name="onboarding"
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="signup"
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="signin"
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="profile"
  options={{ headerShown: false }}
/>

<Stack.Screen
  name="congratulations"
  options={{
    headerShown: false,
    presentation: 'transparentModal',
    animation: 'fade',
  }}
/>
```

### Simple meaning

`_layout.tsx` tells Expo Router:

> "These are my screens and this is how they should behave."

The Congratulations screen uses:

```tsx
presentation: 'transparentModal'
```

because we wanted it to look like a popup/modal.

---

# 5. `onboarding.tsx`

File:

```text
app/onboarding.tsx
```

This is the first part of the application.

It contains:

1. HealthPal intro/collage
2. Doctor onboarding screen 1
3. Doctor onboarding screen 2
4. Doctor onboarding screen 3

We store the onboarding information in an array:

```tsx
const onboardingData = [
  {
    image: ...,
    title: 'Meet Doctors Online',
    description: '...',
  },
  ...
];
```

This is useful because instead of creating three completely separate screens, we reuse the same UI and change the data.

### `useState`

We use:

```tsx
const [currentIndex, setCurrentIndex] = useState(-1);
```

`currentIndex` tells us which onboarding screen is currently displayed.

`-1` means the HealthPal intro is showing.

Then:

```text
-1 → Intro
 0 → Doctor screen 1
 1 → Doctor screen 2
 2 → Doctor screen 3
```

### `useEffect`

We use `useEffect` to wait 2 seconds before moving from the intro to the first onboarding screen.

```tsx
setTimeout(() => {
  setCurrentIndex(0);
}, 2000);
```

### Next button

The Next button changes the index:

```tsx
setCurrentIndex(currentIndex + 1);
```

After the final screen:

```tsx
router.replace('/signup');
```

So the user goes to Create Account.

### Skip

We changed Skip so it goes directly to:

```text
/signup
```

---

# 6. `signup.tsx`

File:

```text
app/signup.tsx
```

This is the Create Account screen.

It contains:

- HealthPal logo
- Name input
- Email input
- Password input
- Create Account button
- Google button
- Facebook button
- Sign In link

Instead of writing all input/button code directly in this screen, we now use reusable components.

For example:

```tsx
<CustomInput
  icon="account-outline"
  placeholder="Your Name"
/>
```

and:

```tsx
<CustomButton
  title="Create Account"
  onPress={handleCreateAccount}
/>
```

and:

```tsx
<SocialButton
  icon="google"
  title="Continue with Google"
/>
```

The Create Account button currently navigates to:

```text
/profile
```

This is frontend navigation only.

---

# 7. `signin.tsx`

File:

```text
app/signin.tsx
```

This is the Sign In screen.

It contains:

- Logo
- Email
- Password
- Sign In button
- Google
- Facebook
- Forgot password
- Sign up link

We reused the same components:

```tsx
<CustomInput />
<CustomButton />
<SocialButton />
```

This prevents us from writing duplicate code.

For example, Sign In uses:

```tsx
<CustomButton
  title="Sign In"
  onPress={handleSignIn}
/>
```

Currently the Sign In button goes to:

```text
/profile
```

Again, this is only frontend navigation. There is no real authentication yet.

---

# 8. `profile.tsx`

File:

```text
app/profile.tsx
```

This is the Fill Your Profile screen.

It contains:

- Back button
- Profile picture
- Name
- Nickname
- Email
- Date of Birth
- Gender
- Save button

### Form state

We use `useState` to store values:

```tsx
const [name, setName] = useState('');
const [nickname, setNickname] = useState('');
const [email, setEmail] = useState('');
const [gender, setGender] = useState('');
```

Date of birth uses:

```tsx
const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
```

Profile image uses:

```tsx
const [profileImage, setProfileImage] = useState<string | null>(null);
```

### Date picker

We use:

```tsx
DateTimePicker
```

The user can select their date of birth instead of manually typing it.

### Gender

We have:

```tsx
const genderOptions = ['Male', 'Female', 'Others'];
```

Then we use `.map()` to display the options.

This is cleaner than writing three separate blocks.

### Profile picture

The profile picture is optional.

We use Expo Image Picker to allow the user to select an image.

### Validation

The Save button is disabled until the required fields are completed.

Required fields:

```text
Name
Nickname
Email
Date of Birth
Gender
```

Profile picture is optional.

We also check whether the email looks valid.

### Save

After successful frontend validation:

```tsx
router.push('/congratulations');
```

---

# 9. `congratulations.tsx`

File:

```text
app/congratulations.tsx
```

This is the popup displayed after saving the profile.

It contains:

- Success icon
- Congratulations text
- Description
- Loading indicator

It uses:

```tsx
presentation: 'transparentModal'
```

from `_layout.tsx`.

After 4 seconds:

```tsx
router.replace('/signin');
```

So the current frontend flow is:

```text
Onboarding
    ↓
Signup
    ↓
Profile
    ↓
Congratulations
    ↓
Sign In
```

---

# 10. `components/reusable`

This folder contains components that are reused by multiple screens.

The reason for this folder is:

> Write common UI once and reuse it wherever needed.

Our reusable components are:

```text
KeyboardAwareScrollView.tsx
CustomButton.tsx
CustomInput.tsx
FormInput.tsx
SocialButton.tsx
```

---

# 11. `CustomButton.tsx`

File:

```text
components/reusable/CustomButton.tsx
```

Used for buttons such as:

- Create Account
- Sign In
- Save

Instead of writing:

```tsx
<Pressable>
  <Text>Sign In</Text>
</Pressable>
```

and its styles again and again, we use:

```tsx
<CustomButton
  title="Sign In"
  onPress={handleSignIn}
/>
```

It also supports:

```tsx
disabled
```

which is useful for the Profile Save button.

---

# 12. `CustomInput.tsx`

File:

```text
components/reusable/CustomInput.tsx
```

Used mainly for authentication inputs.

It combines:

```text
Icon + TextInput
```

For example:

```tsx
<CustomInput
  icon="email-outline"
  placeholder="Your Email"
/>
```

and:

```tsx
<CustomInput
  icon="lock-outline"
  placeholder="Password"
  secureTextEntry
/>
```

This is reused by Signup and Signin.

---

# 13. `FormInput.tsx`

File:

```text
components/reusable/FormInput.tsx
```

This is a simpler reusable text input.

We use it on the Profile screen for:

```text
Name
Nickname
Email
```

Example:

```tsx
<FormInput
  placeholder="Nickname"
  value={nickname}
  onChangeText={setNickname}
/>
```

The component also accepts normal React Native `TextInput` properties because we use:

```tsx
type FormInputProps = TextInputProps;
```

---

# 14. `SocialButton.tsx`

File:

```text
components/reusable/SocialButton.tsx
```

Used for:

```text
Google
Facebook
```

Example:

```tsx
<SocialButton
  icon="google"
  title="Continue with Google"
/>
```

and:

```tsx
<SocialButton
  icon="facebook"
  title="Continue with Facebook"
/>
```

The component automatically chooses the appropriate icon color from the global colors.

---

# 15. `KeyboardAwareScrollView.tsx`

File:

```text
components/reusable/KeyboardAwareScrollView.tsx
```

This solves the problem we had on the Profile screen:

> When the keyboard opened, the lower fields were difficult to reach.

The component combines:

```text
KeyboardAvoidingView
+
ScrollView
```

It uses:

```tsx
Platform.OS === 'ios'
```

to choose the appropriate keyboard behavior.

It also uses:

```tsx
keyboardShouldPersistTaps="handled"
```

and hides the vertical scrollbar.

We can reuse this component for other forms in the future.

---

# 16. `constants/theme.ts`

File:

```text
constants/theme.ts
```

This is where we keep our global colors.

Instead of doing this in every screen:

```tsx
backgroundColor: '#1C2A3A'
```

we use:

```tsx
backgroundColor: Colors.primary
```

Our important colors include:

```tsx
Colors.primary
Colors.white
Colors.text
Colors.secondaryText
Colors.descriptionText
Colors.placeholder
Colors.border
Colors.lightBorder
Colors.inputBackground
Colors.profileBackground
Colors.disabled
Colors.link
Colors.successLight
Colors.overlay
Colors.google
Colors.facebook
```

There are also onboarding-specific colors.

### Why global colors?

If the primary color changes later, we can change it in one place.

For example:

```tsx
primary: '#1C2A3A'
```

Instead of searching through every screen for:

```text
#1C2A3A
```

we change the global variable once.

This is what your manager meant by:

> "colors are properly managed through globally declared color variables."

---

# 17. TypeScript basics we used

The project uses `.tsx` files.

Example:

```tsx
type CustomButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};
```

This tells TypeScript what properties the component expects.

### `string`

```tsx
title: string;
```

means the title must be text.

### Function

```tsx
onPress: () => void;
```

means `onPress` is a function that doesn't return anything.

### Optional property

```tsx
disabled?: boolean;
```

The `?` means the property is optional.

### State typing

Example:

```tsx
const [profileImage, setProfileImage] =
  useState<string | null>(null);
```

This means the value can be either:

```text
string
```

or:

```text
null
```

---

# 18. React Native basics we used

## `View`

Similar to a container.

```tsx
<View>
  ...
</View>
```

Used to group elements.

## `Text`

Displays text.

```tsx
<Text>Hello</Text>
```

## `Image`

Displays images.

```tsx
<Image source={...} />
```

## `TextInput`

Allows the user to type.

```tsx
<TextInput />
```

## `Pressable`

Creates a touchable element.

```tsx
<Pressable onPress={handlePress}>
  <Text>Next</Text>
</Pressable>
```

## `SafeAreaView`

Helps keep content away from device areas such as the notch/status area.

## `Modal`

Displays content above the current screen.

We use it for the Gender selection.

---

# 19. Navigation

We use:

```tsx
import { router } from 'expo-router';
```

### Push

```tsx
router.push('/profile');
```

Opens another route and keeps the current route in the navigation stack.

### Replace

```tsx
router.replace('/signup');
```

Navigates to the new route and replaces the current route.

We use `replace` in places where we don't want the user to simply go back to the previous screen.

---

# 20. `useState`

`useState` stores information that can change.

Example:

```tsx
const [gender, setGender] = useState('');
```

Initially:

```text
gender = ''
```

When the user selects Male:

```tsx
setGender('Male');
```

Now:

```text
gender = 'Male'
```

React updates the screen.

---

# 21. `useEffect`

`useEffect` runs code based on component lifecycle/state changes.

We used it in:

### Onboarding

To wait 2 seconds before showing the first onboarding screen.

### Congratulations

To wait 4 seconds before navigating to Sign In.

We also clean up the timer:

```tsx
return () => clearTimeout(timer);
```

This prevents an old timer from continuing after the component is removed.

---

# 22. `.map()`

We use `.map()` when we have multiple similar items.

For example:

```tsx
genderOptions.map((option) => ...)
```

Instead of manually writing:

```text
Male
Female
Others
```

three times.

We also use `.map()` for onboarding pagination dots.

---

# 23. What "reusable component" means

A reusable component is simply:

> A piece of UI that can be created once and used in multiple places.

Example:

```text
CustomButton
```

can be used by:

```text
Signup
Signin
Profile
```

Instead of having three different button implementations.

This gives us:

```text
Less duplicate code
       ↓
Easier maintenance
       ↓
Consistent UI
```

---

# 24. What we did NOT build

This is important.

Our current work is primarily **frontend**.

We have NOT implemented:

```text
❌ Real user authentication
❌ Backend API
❌ Database
❌ Real Google authentication
❌ Real Facebook authentication
❌ Push notification system
```

The buttons and navigation currently demonstrate the UI flow.

Push notifications are a separate upcoming task.

---

# 25. Current frontend flow

The current application flow is:

```text
┌─────────────────┐
│ HealthPal Intro │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Onboarding 1    │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Onboarding 2    │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Onboarding 3    │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Create Account   │
│ Signup           │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Fill Your Profile│
└────────┬────────┘
         ↓
┌─────────────────┐
│ Congratulations  │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Sign In          │
└─────────────────┘
```

There is also a Sign In → Profile and Sign Up ↔ Sign In navigation path.

---

# 26. Expo vs Metro

We are using:

```text
Expo
```

for the React Native project.

Metro is the JavaScript/TypeScript bundler used by React Native/Expo.

So:

```text
Expo
  ↓
React Native development platform/tooling

Metro
  ↓
Bundles the application code
```

You didn't manually choose Metro instead of Expo.

Your project is an **Expo project**, and Expo uses Metro under the hood.

---

# 27. GitHub checkpoint

After completing the refactoring, we pushed the changes to GitHub.

Commit:

```text
4040738
```

Commit message:

```text
refactor frontend with reusable components
```

The final Git status was:

```text
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

That means the current working code has been committed and pushed successfully.

---

# 28. What your manager asked for

Your manager asked you to:

1. Compare UI with the design
2. Review the code
3. Use reusable components where required
4. Use globally declared colors instead of hardcoded colors
5. After that, move to the next task
6. Start learning Push Notifications in React Native/Expo on Monday

We have completed the current UI/code-refactoring part.

---

# 29. Simple explanation you can give your manager

If someone asks:

**"What did you change?"**

You can explain:

> "I reviewed the frontend screens and refactored the code to use reusable components. I created reusable components for buttons, inputs, social buttons, form inputs, and keyboard-aware scrolling. I also moved the application colors into a global `Colors` object in `constants/theme.ts` instead of keeping hardcoded colors inside individual screens. I cleaned the onboarding, signup, signin, profile, congratulations, and navigation files while keeping the existing UI and frontend flow working."

---

# 30. What to learn next

Your next assigned task is:

```text
Push Notifications in React Native / Expo
```

Before implementing it, understand:

```text
What is a push notification?
        ↓
How does it reach a phone?
        ↓
What is a notification permission?
        ↓
What is an Expo push token?
        ↓
How does Expo Notifications work?
        ↓
How do we test it?
        ↓
How do we integrate it into HealthPal?
```

That is the next stage. Don't mix it with the current UI refactoring work.

---

# Quick memory summary

```text
Expo
  ↓
React Native project

Expo Router
  ↓
Navigation using files inside app/

app/
  ↓
Screens

components/reusable/
  ↓
Reusable UI

constants/theme.ts
  ↓
Global colors

useState
  ↓
Stores changing screen data

useEffect
  ↓
Runs side effects/timers

Pressable
  ↓
Touchable UI

TextInput
  ↓
User input

Modal
  ↓
Popup/selection UI

StyleSheet
  ↓
Screen/component styling

router.push()
  ↓
Navigate to another screen

router.replace()
  ↓
Navigate and replace current route

TypeScript
  ↓
Adds types and catches mistakes before runtime
```

## Current status

**Frontend UI:** ✅  
**Reusable components:** ✅  
**Global colors:** ✅  
**Navigation:** ✅  
**Profile form:** ✅  
**GitHub backup:** ✅  
**Push notifications:** ⏳ Next task
