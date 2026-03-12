// import { Button } from 'src/components/ui/button'
// import {
// 	Dialog,
// 	DialogClose,
// 	DialogContent,
// 	DialogDescription,
// 	DialogFooter,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from 'src/components/ui/dialog'
// import { Input } from 'src/components/ui/input'
// import { Label } from 'src/components/ui/label'

// export function DialogDemo() {
// 	return (
// 		<Dialog>
// 			<form>
// 				<DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
// 				<DialogContent className="sm:max-w-[425px]">
// 					<DialogHeader>
// 						<DialogTitle>Edit profile</DialogTitle>
// 						<DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
// 					</DialogHeader>
// 					<div className="grid gap-4">
// 						<div className="grid gap-3">
// 							<Label htmlFor="name-1">Name</Label>
// 							<Input id="name-1" name="name" defaultValue="Pedro Duarte" />
// 						</div>
// 						<div className="grid gap-3">
// 							<Label htmlFor="username-1">Username</Label>
// 							<Input id="username-1" name="username" defaultValue="@peduarte" />
// 						</div>
// 					</div>
// 					<DialogFooter>
// 						<DialogClose render={<Button variant="outline">Cancel</Button>} />
// 						<Button type="submit">Save changes</Button>
// 					</DialogFooter>
// 				</DialogContent>
// 			</form>
// 		</Dialog>
// 	)
// }
