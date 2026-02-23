import { DropdownMenu, Text }  from "@radix-ui/themes";
import * as React from "react";
import {
	HamburgerMenuIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";
import "./styles.css";
const Dropdown = () => {

    const [bookmarksChecked, setBookmarksChecked] = React.useState(false);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");
    
        return (
            <>
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', position: 'relative' }}>

        <Text size={"8"}>
            DropDown Menu
        </Text>

			<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className="IconButton" aria-label="Customise options">
					<HamburgerMenuIcon />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
					<DropdownMenu.Item className="DropdownMenuItem">
						New Tab <div className="RightSlot">⌘+T</div>
					</DropdownMenu.Item>
					<DropdownMenu.Item className="DropdownMenuItem">
						New Window <div className="RightSlot">⌘+N</div>
					</DropdownMenu.Item>
					<DropdownMenu.Item className="DropdownMenuItem" disabled>
						New Private Window <div className="RightSlot">⇧+⌘+N</div>
					</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
							More Tools
							<div className="RightSlot">
								<ChevronRightIcon />
							</div>
						</DropdownMenu.SubTrigger>
							<DropdownMenu.SubContent
								className="DropdownMenuSubContent"
								sideOffset={2}
								alignOffset={-5}
							>
								<DropdownMenu.Item className="DropdownMenuItem">
									Save Page As… <div className="RightSlot">⌘+S</div>
								</DropdownMenu.Item>
								<DropdownMenu.Item className="DropdownMenuItem">
									Create Shortcut…
								</DropdownMenu.Item>
								<DropdownMenu.Item className="DropdownMenuItem">
									Name Window…
								</DropdownMenu.Item>
								<DropdownMenu.Separator className="DropdownMenu.Separator" />
								<DropdownMenu.Item className="DropdownMenuItem">
									Developer Tools
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
					</DropdownMenu.Sub>

					<DropdownMenu.Separator className="DropdownMenuSeparator" />

					<DropdownMenu.CheckboxItem
						className="DropdownMenuCheckboxItem"
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						Show Bookmarks <div className="RightSlot">⌘+B</div>
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem
						className="DropdownMenuCheckboxItem"
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						Show Full URLs
					</DropdownMenu.CheckboxItem>

					<DropdownMenu.Separator className="DropdownMenuSeparator" />

					<DropdownMenu.Label className="DropdownMenuLabel">
						People
					</DropdownMenu.Label>
					<DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="pedro"
						>
							Pedro Duarte
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="colm"
						>
							Colm Tuite
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>

				</DropdownMenu.Content>
		</DropdownMenu.Root>
		</div>
        </>
	);
        
}

export default Dropdown;