import * as React from "react";
import { Toast } from "radix-ui";
import "./styles.css";
import { Text } from "@radix-ui/themes";

const ToastDemo = () => {
	const [open, setOpen] = React.useState(false);
	const eventDateRef = React.useRef(new Date());
	const timerRef = React.useRef(0);

	React.useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
        <div display ={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} height={"100%"} width={"100%"} position={"relative"}    >
            <div>
        <Text size={"2"}>Click this and you see a notification popping up</Text>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', position: 'relative' }}>
                <Toast.Provider swipeDirection="right">
			<button
				className="Button large violet"
				onClick={() => {
					setOpen(false);
					window.clearTimeout(timerRef.current);
					timerRef.current = window.setTimeout(() => {
						eventDateRef.current = oneWeekAway();
						setOpen(true);
					}, 100);
				}}
			>
				Schedule
			</button>

			<Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
				<Toast.Title className="ToastTitle">Scheduled: Catch up</Toast.Title>
				<Toast.Description asChild>
					<time
						className="ToastDescription"
						dateTime={eventDateRef.current.toISOString()}
					>
						{prettyDate(eventDateRef.current)}
					</time>
				</Toast.Description>
				<Toast.Action
					className="ToastAction"
					asChild
					altText="Goto schedule to undo"
				>
					<button className="Button small green">Undo</button>
				</Toast.Action>
			</Toast.Root>
			<Toast.Viewport className="ToastViewport" />
		</Toast.Provider>

            </div>
		
        </div>
	);
};

function oneWeekAway(date) {
	const now = new Date();
	const inOneWeek = now.setDate(now.getDate() + 7);
	return new Date(inOneWeek);
}

function prettyDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		timeStyle: "short",
	}).format(date);
}

export default ToastDemo;
