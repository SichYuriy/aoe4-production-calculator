import {useAppSelector} from "../../../hooks";
import {selectActiveResourceDropOffModifiers} from "../../../state/ResourceDropOffModifiersSlice";
import ResourceDropOffModifier from "../../../model/ResourceDropOffModifier";

function ResourceDropOffDetails() {
    const resourceDropOffModifiers: ResourceDropOffModifier[] = useAppSelector(selectActiveResourceDropOffModifiers);

    let items = resourceDropOffModifiers.map(modifier => {
        let description = [];
        let bonusResources = modifier.getDropOffPercentage(resourceDropOffModifiers.map(modifier => modifier.id));
        if (bonusResources.food > 0) {
            description.push(`food +${bonusResources.food}%`);
        }
        if (bonusResources.wood > 0) {
            description.push(`wood +${bonusResources.wood}%`)
        }
        if (bonusResources.gold > 0) {
            description.push(`gold +${bonusResources.gold}%`)
        }
        if (bonusResources.stone > 0) {
            description.push(`stone +${bonusResources.stone}%`)
        }
        return {
            id: modifier.id,
            description: description.join(', ')
        }
    });

    return (
        <div>
            <div>Resource drop off:</div>
            {items.map(item =>
                <div key={item.id}>{item.id}: {item.description}</div>
            )}
        </div>
    );
}

export default ResourceDropOffDetails;