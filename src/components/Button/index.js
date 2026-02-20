import {Button,Flex,Text} from '@radix-ui/themes';
const ButtonComp = () => {
    return (
        <>
        <Flex direction="column" gap="2" align="center">
        <Text size="7">This button is from radix Themes with Minimal Configuration</Text>
        <Button>
            Button from radix
        </Button>
        </Flex>
        </>
    )
}

export default ButtonComp;