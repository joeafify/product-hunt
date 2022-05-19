import DiscussionItem from "./DiscussionItem";

function DiscussionList(props: any) {
	return (
		<div>
			<ul>
				{[1, 2, 3, 4].map((comment) => (
					<DiscussionItem />
				))}
			</ul>
		</div>
	);
}

export default DiscussionList;
