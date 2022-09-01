function ModifierDetails(props: { modifiersLabel: string, items: { id: string, description: string }[] }) {
    return (
        <div>
            <div>{props.modifiersLabel}</div>
            {props.items.map(item =>
                <div key={item.id}>{item.id}: {item.description}</div>
            )}
        </div>
    );
}

export default ModifierDetails;
